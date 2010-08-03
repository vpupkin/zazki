package com.oxseed.saas.zk;
  
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory; 
public class ZKServlet extends org.zkoss.zk.ui.http.DHtmlLayoutServlet {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private static Log log = LogFactory.getLog(""+ZKServlet.class); 
 
	public void init(ServletConfig arg0) throws ServletException {
		super.init(arg0); 
	}
 

}
