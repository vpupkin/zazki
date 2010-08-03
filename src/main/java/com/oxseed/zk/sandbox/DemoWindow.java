package com.oxseed.zk.sandbox;
 

import net.sf.jsr107cache.Cache;

import org.zkoss.zk.ui.Component;
import org.zkoss.zk.ui.Path;
import org.zkoss.zul.Textbox;
import org.zkoss.zul.Window;
import org.zkoss.zul.Include;
import org.zkoss.zul.impl.XulElement;

 
public class DemoWindow extends Window {
	public static final String ZK_DEMO_CONTENT = "zk.demo.content";

	public void onCreate() {
		final Include inc = new Include();
		inc.setSrc("/barDemo.zul"); //inc.getSrc()
		Component componentTmp = Path.getComponent("/demo/codeView");//demo/tryView/
		Textbox tbTmp = (Textbox)componentTmp;
		Cache cache = CodeCache.getCache(); 
		String valueTmp = (String) cache.get(ZK_DEMO_CONTENT);
		if (valueTmp  == null){
			valueTmp = " <window title=\"My First Window\" border=\"normal\" width=\"200px\">" +
					"			Hello, World!" +
					"			</window>"; 			 
		}
		cache.put(ZK_DEMO_CONTENT ,valueTmp );
		
		tbTmp.setValue(valueTmp); 
		componentTmp .invalidate();
	}
}