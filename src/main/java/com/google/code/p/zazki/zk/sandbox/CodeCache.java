package com.google.code.p.zazki.zk.sandbox;
 
import cc.co.llabor.cache.Manager;
 
import net.sf.jsr107cache.Cache; 

/** 
 * <b>Description:TODO</b>
 * @author      vipup<br>
 * <br>
 * <b>Copyright:</b>     Copyright (c) 2006-2008 Monster AG <br>
 * <b>Company:</b>       Monster AG  <br>
 * 
 * Creation:  03.08.2010::18:51:20<br> 
 */
public class CodeCache {
	private static final String ZKCODE_NS = CodeCache.class.getName();

	public static Cache getCache()   { 
 		Cache retval =   Manager.getCache(ZKCODE_NS); 
 		return  retval; 
	}
}


 