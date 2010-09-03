package com.oxseed.zk.sandbox;  
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
		try{
			execute();
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
	public void execute() {
		Component view = getFellow("winTT").getLastChild().getLastChild(); 
		final Session session = view.getDesktop().getSession();
		final Class<? extends CodeView> cMyClass = this.getClass();
		final String sTrackAttrNameTmp = cMyClass.getName();
		Object backTrack = session.getAttribute(sTrackAttrNameTmp);
		synchronized (session) {
			if (backTrack == null){
				// mark this session as "busy" and go forward
				session.setAttribute(sTrackAttrNameTmp, cMyClass);
			}else{
				return;
			}
		}
		try{
			Components.removeAllChildren(view);
			
			String valueTmp = ValueVersioningManager.checkOut( DemoWindow.ZK_DEMO_CONTENT); 
			valueTmp = valueTmp ==null? getValue():valueTmp;
			log.debug(valueTmp);   
			Executions.createComponentsDirectly(valueTmp, "zul", view, null);
			
		}catch(Throwable e){
			e.printStackTrace();
		}
		
		// unmark for future!
		session.setAttribute(sTrackAttrNameTmp, null);
		
	}
}
