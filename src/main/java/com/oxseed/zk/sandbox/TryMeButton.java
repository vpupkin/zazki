package com.oxseed.zk.sandbox;


import net.sf.jsr107cache.Cache;

import org.zkoss.zk.ui.*;
import org.zkoss.zul.*;

/**
 * The "Try me!" button.
 * 
 * @author tomyeh
 */
public class TryMeButton extends Button {
	public void onClick() {
		((Groupbox)getFellow("tryView")).setOpen(true);
		 
		Component componentTmp = Path.getComponent("/demo/codeView"); 
		Textbox tbTmp = (Textbox)componentTmp;	
		String valueTmp = tbTmp.getValue();
		ValueVersioningManager.checkIn( DemoWindow.ZK_DEMO_CONTENT, valueTmp);
		((CodeView)getFellow("codeView")).execute();

	}
}
