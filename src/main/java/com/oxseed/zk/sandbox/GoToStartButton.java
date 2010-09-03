package com.oxseed.zk.sandbox; 
import org.zkoss.zk.ui.*;
import org.zkoss.zul.*;

/**
 * The "Try me!" button.
 * 
 * @author tomyeh
 */
public class GoToStartButton extends Button {
	public void onClick() {
		Component componentTmp = getFellow("codeView"); 
		Textbox tbTmp = (Textbox)componentTmp;	
		String valueTmp = tbTmp.getValue();
		Component ZKError = Path.getComponent("/welcome"); 
		Components.removeAllChildren(ZKError);	
		Executions.createComponentsDirectly(valueTmp, "zul", ZKError, null);
	}
}
