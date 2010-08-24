package com.google.code.p.zazki.zk.sandbox;

import net.sf.jsr107cache.Cache;
 
public class ValueVersioningManager {

	/**
	 * deliver the actual revision of Value 
	 */	
	public static String checkOut(String resourceName) {
		Cache cache = CodeCache.getCache(); 
		String valueTmp = (String) cache.get(resourceName);
		return valueTmp;
	}

	 /**
	  * commit next value as new Revision 
	  */
	public static void checkIn(String resourceName, String newValue) {
		String oldValue = checkOut(resourceName);
		if (!(""+oldValue).equals(newValue)){
			Cache cache = CodeCache.getCache(); 
			Object verKey = verkey(resourceName);
			String lastVersion = (String)cache.get( verKey );
			if ( lastVersion == null){
				// very first instance 
				lastVersion = "1";  
			}else{
				cache.put(resourceName + "["+ lastVersion +"]", oldValue);
				lastVersion = ""+(Integer.parseInt(lastVersion)+1); 
			} 
			cache.put ( verKey, lastVersion );
			cache.put (resourceName ,newValue );
		}
	}

	private static Object verkey(String resourceName) {
		 return "!V!_"+resourceName;
	}

	public static void rollback(String resourceName) {
		Cache cache = CodeCache.getCache(); 
		Object verKey = verkey(resourceName);
		String lastVersion = (String)cache.get( verKey ); 
		String prevVer = ""+(Integer.parseInt(lastVersion)-2);
		String prevVal =  (String)cache.get (resourceName + "["+ prevVer +"]"  );
		checkIn(resourceName, prevVal);
		
	}

}


 