package com.oxseed.zk.sandbox; 
import net.sf.jsr107cache.Cache; 
import org.apache.commons.logging.LogFactory;
import org.zkoss.zk.ui.*;
import org.zkoss.zk.ui.ext.AfterCompose;
import org.zkoss.zul.*;
 
public class CodeView extends Textbox implements AfterCompose {
	/**
	 * @author vipup
	 */
	private static final long serialVersionUID = 559317910798406915L;
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
		Executions.createComponentsDirectly(valueTmp, "zul", view, null);
	}
}
