package com.google.code.p.zazki.saas.zk;
  
import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory; 
import org.zkoss.zk.ui.Session;

import com.google.code.p.zazki.zk.sandbox.DemoWindow;
import com.google.code.p.zazki.zk.sandbox.ValueVersioningManager;
public class ZKServlet extends org.zkoss.zk.ui.http.DHtmlLayoutServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private static Log log = LogFactory.getLog(""+ZKServlet.class); 
 
	public void init(ServletConfig arg0) throws ServletException {
		super.init(arg0); 
	}

	@Override
	protected boolean process(Session session, HttpServletRequest req,
			HttpServletResponse res, String zul, boolean arg4)
			throws ServletException, IOException {
			boolean retval = false;
			try{
				retval = super.process(session, req, res, zul, arg4);
			}catch(org.mozilla.javascript.WrappedException e){ 
				retval = true;	
				retval = super.process(session, req, res, "/index.zul"+"", arg4);
			}catch(RuntimeException e){  
				e.printStackTrace(); 
				try{
					ValueVersioningManager.rollback(DemoWindow.ZK_DEMO_CONTENT );
					retval = true;	
					retval = super.process(session, req, res, "/index.zul"+"", arg4);
				}catch(NullPointerException e2){
					e2.printStackTrace();
					retval = super.process(session, req, res, "/empty.zul"+"", arg4);
				}
			}catch(Exception e){  
				e.printStackTrace(); 
				ValueVersioningManager.rollback(DemoWindow.ZK_DEMO_CONTENT );
				retval = super.process(session, req, res, zul, arg4);
			}
			
			return retval ;
		 
	}
 

}
