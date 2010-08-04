package com.oxseed.saas.zk;
  
import java.io.IOException;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory; 
import org.zkoss.zk.ui.Session;

import com.oxseed.zk.sandbox.DemoWindow;
import com.oxseed.zk.sandbox.ValueVersioningManager;
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
			boolean retval = true;
			try{
				retval = super.process(session, req, res, zul, arg4);
			}catch(org.mozilla.javascript.WrappedException e){
				retval = false;
				e.printStackTrace();
				ValueVersioningManager.rollback(DemoWindow.ZK_DEMO_CONTENT );
				retval = process(session, req, res, zul, arg4);				
			}catch(Exception e){ 
				retval = false;
				e.printStackTrace(); 
				retval = super.process(session, req, res, zul, arg4);
			}
			
			return retval ;
		 
	}
 

}
