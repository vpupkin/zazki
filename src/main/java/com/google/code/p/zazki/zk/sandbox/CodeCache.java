package com.google.code.p.zazki.zk.sandbox;

import java.util.HashMap;

import ws.rrd.cache.FileCache;

import net.sf.jsr107cache.Cache;
import net.sf.jsr107cache.CacheException;
import net.sf.jsr107cache.CacheFactory;
import net.sf.jsr107cache.CacheManager;

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
		CacheManager cm = CacheManager.getInstance();
		Cache retval = cm.getCache (ZKCODE_NS);
		if (retval == null)
		synchronized (CacheManager.class) { 
			if (retval == null)
			try {
				CacheFactory cacheFactory;
				cacheFactory = cm.getCacheFactory();
				HashMap props = new HashMap();
				props.put(FileCache.NAMESPACE, ZKCODE_NS );
				Cache cacheTmp;
				cacheTmp = cacheFactory.createCache(props);
				cm.registerCache(ZKCODE_NS, cacheTmp);
				retval = cacheTmp;
			} catch (CacheException e) { 
				e.printStackTrace();
				throw new RuntimeException(e);
			}
		} 
		return  retval; 
	}
}


 