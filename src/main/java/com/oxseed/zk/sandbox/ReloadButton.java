package com.oxseed.zk.sandbox;

import java.util.Set;
import java.util.HashSet;

import org.zkoss.zk.ui.*;
import org.zkoss.zul.*;

/**
 * The "Reload" button.
 * 
 * @author tomyeh
 */
public class ReloadButton extends Button {
	public void onClick() {
		Path.getComponent("//").invalidate();
	}
}
