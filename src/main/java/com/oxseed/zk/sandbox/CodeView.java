package com.oxseed.zk.sandbox;

import java.util.Map;

import net.sf.jsr107cache.Cache;

import org.apache.commons.logging.LogFactory;
import org.zkoss.zk.ui.*;
import org.zkoss.zk.ui.ext.AfterCompose;
import org.zkoss.zul.*;
 
public class CodeView extends Textbox implements AfterCompose {
	private static org.apache.commons.logging.Log log = LogFactory.getLog(""+CodeView.class);
	public void afterCompose() {
		execute();
	}
	public void execute() {
		Component view = getFellow("view"); 
		Components.removeAllChildren(view);
		Cache cache = CodeCache.getCache();//Map attributes = session.getAttributes();
		String valueTmp = (String)cache.get(DemoWindow.ZK_DEMO_CONTENT); 
		valueTmp = valueTmp ==null? getValue():valueTmp;
		log.debug(valueTmp);  
		cache.put(DemoWindow.ZK_DEMO_CONTENT, valueTmp);//attributes.put("zk.demo.content" ,valueTmp );
		Executions.createComponentsDirectly(valueTmp, "zul", view, null);
	}
}
