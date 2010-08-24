(function(){
var $gwt_version = "2.0.3";
var $wnd = window;
var $doc = $wnd.document;
var $moduleName, $moduleBase;
var $strongName = 'AB589C9D7E469F2BE7D16AA53ABB00E5';
var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
$stats && $stats({moduleName:'jsupload',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});
var _, N8000000000000000_longLit = [0, -9223372036854775808], P0_longLit = [0, 0], P3c_longLit = [60, 0], P78_longLit = [120, 0], P3e8_longLit = [1000, 0], Pea60_longLit = [60000, 0], P1000000_longLit = [16777216, 0], P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];
function nullMethod(){
}

function equals(other){
  return this === (other == null?null:other);
}

function getClass_0(){
  return Ljava_lang_Object_2_classLit;
}

function hashCode_0(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_0(){
  return (this.typeMarker$ == nullMethod || this.typeId$ == 2?this.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName + '@' + toPowerOfTwoString(this.typeMarker$ == nullMethod || this.typeId$ == 2?this.hashCode$():this.$H || (this.$H = ++sNextHashId), 4);
}

function Object_0(){
}

_ = Object_0.prototype = {};
_.equals$ = equals;
_.getClass$ = getClass_0;
_.hashCode$ = hashCode_0;
_.toString$ = toString_0;
_.toString = function(){
  return this.toString$();
}
;
_.typeMarker$ = nullMethod;
_.typeId$ = 1;
function $addStyleDependentName(this$static, styleSuffix){
  this$static.addStyleName_0(getStylePrimaryName(this$static.getStyleElement()) + '-' + styleSuffix);
}

function $addStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  this$static.removeStyleName(getStylePrimaryName(this$static.getStyleElement()) + '-' + styleSuffix);
}

function $removeStyleName(this$static, style){
  setStyleName(this$static.getStyleElement(), style, false);
}

function $replaceNode(node, newNode){
  var p_0 = node.parentNode;
  if (!p_0) {
    return;
  }
  p_0.insertBefore(newNode, node);
  p_0.removeChild(node);
}

function $setElement(this$static, elem){
  this$static.element_0 = elem;
}

function $setSize(this$static, width, height){
  this$static.element_0.style['width'] = width;
  this$static.element_0.style['height'] = height;
}

function $setVisible(this$static, visible){
  this$static.getElement_0().style.display = visible?'':'none';
}

function $toString(this$static){
  if (!this$static.element_0) {
    return '(null handle)';
  }
  return ($clinit_56() , this$static.getElement_0()).outerHTML;
}

function addStyleName(style){
  setStyleName(this.getStyleElement(), style, true);
}

function getClass_1(){
  return Lcom_google_gwt_user_client_ui_UIObject_2_classLit;
}

function getElement(){
  return this.element_0;
}

function getOffsetHeight(){
  return parseInt(this.getElement_0()['offsetHeight']) || 0;
}

function getOffsetWidth(){
  return parseInt(this.getElement_0()['offsetWidth']) || 0;
}

function getStyleElement(){
  return this.getElement_0();
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = elem['className'] == null?null:String(elem['className']);
  spaceIdx = fullClassName.indexOf(fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx - 0);
  }
  return fullClassName;
}

function removeStyleName(style){
  setStyleName(this.getStyleElement(), style, false);
}

function setHeight(height){
  this.getElement_0().style['height'] = height;
}

function setStyleName(elem, style, add){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Style names cannot be empty');
  }
  add?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStyleName_0(style){
  this.getStyleElement()['className'] = style;
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw $RuntimeException(new RuntimeException, 'Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible_0(visible){
  this.getElement_0().style.display = visible?'':'none';
}

function setWidth(width){
  this.getElement_0().style['width'] = width;
}

function toString_1(){
  return $toString(this);
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = elem.className.split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

function UIObject(){
}

_ = UIObject.prototype = new Object_0;
_.addStyleName_0 = addStyleName;
_.getClass$ = getClass_1;
_.getElement_0 = getElement;
_.getOffsetHeight = getOffsetHeight;
_.getOffsetWidth = getOffsetWidth;
_.getStyleElement = getStyleElement;
_.removeStyleName = removeStyleName;
_.setHeight = setHeight;
_.setStyleName = setStyleName_0;
_.setVisible = setVisible_0;
_.setWidth = setWidth;
_.toString$ = toString_1;
_.typeId$ = 3;
_.element_0 = null;
function $addDomHandler(this$static, handler, type){
  $sinkEvents(this$static, $eventGetTypeInt(type.name_0));
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $addHandler(this$static, handler, type){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = $HandlerManager(new HandlerManager, this$static)):this$static.handlerManager, type, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  this$static.getElement_0().__listener = this$static;
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && $sinkEvents(this$static, bitsToAdd);
  this$static.doAttachChildren();
  this$static.onLoad_0();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(($clinit_56() , event_0).type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && $isOrHasChild(this$static.getElement_0(), related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.getElement_0());
}

function $onDetach(this$static){
  if (!this$static.isAttached()) {
    throw $IllegalStateException_0(new IllegalStateException, "Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      this$static.getElement_0().__listener = null;
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_288();
    $containsKey(widgetsToDetach.map, this$static) && detachNow(this$static);
  }
   else if (instanceOf(this$static.parent_0, 58)) {
    dynamicCast(this$static.parent_0, 58).remove(this$static);
  }
   else if (this$static.parent_0) {
    throw $IllegalStateException_0(new IllegalStateException, "This widget's parent does not implement HasWidgets");
  }
}

function $replaceElement_0(this$static, elem){
  this$static.attached && (this$static.getElement_0().__listener = null , undefined);
  !!this$static.element_0 && $replaceNode(this$static.element_0, elem);
  this$static.element_0 = elem;
  this$static.attached && (this$static.getElement_0().__listener = this$static , undefined);
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached() && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw $IllegalStateException_0(new IllegalStateException, 'Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.isAttached() && this$static.onAttach();
  }
}

function $sinkEvents(this$static, eventBitsToAdd){
  this$static.eventsToSink == -1?sinkEvents(this$static.getElement_0(), eventBitsToAdd | (this$static.getElement_0().__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);
}

function doAttachChildren(){
}

function doDetachChildren(){
}

function fireEvent(event_0){
  !!this.handlerManager && $fireEvent_0(this.handlerManager, event_0);
}

function getClass_2(){
  return Lcom_google_gwt_user_client_ui_Widget_2_classLit;
}

function isAttached(){
  return this.attached;
}

function onAttach(){
  $onAttach(this);
}

function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}

function onDetach(){
  $onDetach(this);
}

function onLoad_0(){
}

function onUnload(){
}

function Widget(){
}

_ = Widget.prototype = new UIObject;
_.doAttachChildren = doAttachChildren;
_.doDetachChildren = doDetachChildren;
_.fireEvent_0 = fireEvent;
_.getClass$ = getClass_2;
_.isAttached = isAttached;
_.onAttach = onAttach;
_.onBrowserEvent = onBrowserEvent;
_.onDetach = onDetach;
_.onLoad_0 = onLoad_0;
_.onUnload = onUnload;
_.typeId$ = 4;
_.attached = false;
_.eventsToSink = 0;
_.handlerManager = null;
_.layoutData = null;
_.parent_0 = null;
function $adopt(this$static, child){
  $setParent(child, this$static);
}

function $clear(this$static){
  var it;
  it = this$static.iterator_0();
  while (it.hasNext()) {
    it.next_0();
    it.remove_0();
  }
}

function add_0(child){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'This panel does not support no-arg add()');
}

function doAttachChildren_0(){
  tryCommand(this, ($clinit_227() , attachCommand));
}

function doDetachChildren_0(){
  tryCommand(this, ($clinit_227() , detachCommand));
}

function getClass_3(){
  return Lcom_google_gwt_user_client_ui_Panel_2_classLit;
}

function onLoad_1(){
}

function onUnload_0(){
}

function Panel(){
}

_ = Panel.prototype = new Widget;
_.add = add_0;
_.doAttachChildren = doAttachChildren_0;
_.doDetachChildren = doDetachChildren_0;
_.getClass$ = getClass_3;
_.onLoad_0 = onLoad_1;
_.onUnload = onUnload_0;
_.typeId$ = 5;
function $SimplePanel(this$static){
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  return this$static;
}

function $add(this$static, w){
  if (this$static.getWidget()) {
    throw $IllegalStateException_0(new IllegalStateException, 'SimplePanel can only contain one child widget');
  }
  this$static.setWidget(w);
}

function $remove(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    this$static.getContainerElement().removeChild(w.getElement_0());
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && this$static.remove(this$static.widget);
  this$static.widget = w;
  if (w) {
    this$static.getContainerElement().appendChild(this$static.widget.getElement_0());
    $setParent(w, this$static);
  }
}

function add_1(w){
  $add(this, w);
}

function getClass_4(){
  return Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit;
}

function getContainerElement(){
  return this.element_0;
}

function getWidget(){
  return this.widget;
}

function iterator(){
  return $SimplePanel$1(new SimplePanel$1, this);
}

function remove_0(w){
  return $remove(this, w);
}

function setWidget(w){
  $setWidget(this, w);
}

function SimplePanel(){
}

_ = SimplePanel.prototype = new Panel;
_.add = add_1;
_.getClass$ = getClass_4;
_.getContainerElement = getContainerElement;
_.getWidget = getWidget;
_.iterator_0 = iterator;
_.remove = remove_0;
_.setWidget = setWidget;
_.typeId$ = 6;
_.widget = null;
function $PopupPanel_0(this$static, autoHide){
  var parent_0;
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  this$static.glassResizer = new PopupPanel$1;
  this$static.animType = ($clinit_285() , CENTER_0);
  this$static.resizeAnimation = $PopupPanel$ResizeAnimation(new PopupPanel$ResizeAnimation, this$static);
  this$static.element_0.appendChild($createElement($doc, 'div'));
  $setPopupPosition(this$static, 0, 0);
  (parent_0 = $getFirstChildElement(this$static.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)['className'] = 'gwt-PopupPanel';
  $getFirstChildElement(this$static.element_0)['className'] = 'popupContent';
  this$static.autoHide = autoHide;
  this$static.autoHideOnHistoryEvents = autoHide;
  return this$static;
}

function $PopupPanel_1(this$static, autoHide, modal){
  $PopupPanel_0(this$static, autoHide);
  this$static.modal = modal;
  return this$static;
}

function $center(this$static){
  var initiallyAnimated, initiallyShowing, left, top_0;
  initiallyShowing = this$static.showing;
  initiallyAnimated = this$static.isAnimationEnabled;
  if (!initiallyShowing) {
    this$static.element_0.style['visibility'] = 'hidden';
    $setVisible_2(this$static.element_0, false);
    this$static.isAnimationEnabled = false;
    this$static.show();
  }
  left = $getClientWidth($doc) - (parseInt(this$static.element_0['offsetWidth']) || 0) >> 1;
  top_0 = $getClientHeight($doc) - (parseInt(this$static.element_0['offsetHeight']) || 0) >> 1;
  $setPopupPosition(this$static, max_1($getScrollLeft(($clinit_56() , $doc)) + left, 0), max_1($getScrollTop($doc) + top_0, 0));
  if (!initiallyShowing) {
    this$static.isAnimationEnabled = initiallyAnimated;
    if (initiallyAnimated) {
      this$static.element_0.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      this$static.element_0.style['visibility'] = 'visible';
      $setVisible_2(this$static.element_0, true);
      $run(this$static.resizeAnimation, 200, (new Date).getTime());
    }
     else {
      this$static.element_0.style['visibility'] = 'visible';
      $setVisible_2(this$static.element_0, true);
    }
  }
}

function $eventTargetsPopup(this$static, event_0){
  var target;
  target = ($clinit_56() , event_0).srcElement;
  if (is_0(target)) {
    return $isOrHasChild(this$static.element_0, target);
  }
  return false;
}

function $hide_0(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static, false, true);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  this$static.onPreviewNativeEvent(event_0);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type = $eventGetTypeInt(($clinit_56() , nativeEvent).type);
  switch (type) {
    case 128:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 512:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 256:
      {
        (nativeEvent.which || nativeEvent.keyCode || 0) & 65535;
        (nativeEvent.shiftKey?1:0) | (nativeEvent.metaKey?8:0) | (nativeEvent.ctrlKey?2:0) | (nativeEvent.altKey?4:0);
        return;
      }

    case 4:
      if (sCaptureElem) {
        event_0.isConsumed = true;
        return;
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide_0(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft(($clinit_56() , $doc));
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element_0;
  elem.style['left'] = left + ($clinit_81() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setState(this$static, showing, maybeAnimate){
  maybeAnimate?$setState_0(this$static.resizeAnimation, showing):$cancel(this$static.resizeAnimation);
  this$static.showing = showing;
  if (showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler($PopupPanel$3(new PopupPanel$3, this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler($PopupPanel$4(new PopupPanel$4, this$static));
  }
   else {
    if (this$static.nativePreviewHandlerRegistration) {
      $removeHandler(this$static.nativePreviewHandlerRegistration);
      this$static.nativePreviewHandlerRegistration = null;
    }
    if (this$static.historyHandlerRegistration) {
      $removeHandler(this$static.historyHandlerRegistration);
      this$static.historyHandlerRegistration = null;
    }
  }
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
  $setState(this$static, true, true);
}

function center(){
  $center(this);
}

function getClass_5(){
  return Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit;
}

function getContainerElement_0(){
  return $getFirstChildElement(($clinit_56() , this.element_0));
}

function getOffsetHeight_0(){
  return parseInt(this.element_0['offsetHeight']) || 0;
}

function getOffsetWidth_0(){
  return parseInt(this.element_0['offsetWidth']) || 0;
}

function getStyleElement_0(){
  return $getStyleElement_1($getFirstChildElement(($clinit_56() , this.element_0)));
}

function hide(){
  $hide_0(this);
}

function onPreviewNativeEvent(event_0){
}

function onUnload_1(){
  this.showing && $setState(this, false, false);
}

function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}

function setVisible_1(visible){
  this.element_0.style['visibility'] = visible?'visible':'hidden';
  $setVisible_2(this.element_0, visible);
}

function setWidget_0(w){
  $setWidget(this, w);
  $maybeUpdateSize(this);
}

function setWidth_0(width){
  this.desiredWidth = width;
  $maybeUpdateSize(this);
  width.length == 0 && (this.desiredWidth = null);
}

function show(){
  $show(this);
}

function PopupPanel(){
}

_ = PopupPanel.prototype = new SimplePanel;
_.center_0 = center;
_.getClass$ = getClass_5;
_.getContainerElement = getContainerElement_0;
_.getOffsetHeight = getOffsetHeight_0;
_.getOffsetWidth = getOffsetWidth_0;
_.getStyleElement = getStyleElement_0;
_.hide = hide;
_.onPreviewNativeEvent = onPreviewNativeEvent;
_.onUnload = onUnload_1;
_.setHeight = setHeight_0;
_.setVisible = setVisible_1;
_.setWidget = setWidget_0;
_.setWidth = setWidth_0;
_.show = show;
_.typeId$ = 7;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.desiredHeight = null;
_.desiredWidth = null;
_.glass = null;
_.historyHandlerRegistration = null;
_.isAnimationEnabled = false;
_.isGlassEnabled = false;
_.leftPosition = -1;
_.modal = false;
_.nativePreviewHandlerRegistration = null;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = -1;
function $add_1(this$static, object, direction){
  var widget;
  widget = objectToWidget(object);
  this$static.panelbox?$add_2(this$static.panelbox, widget, direction):$add_6(this$static.panel, widget, direction);
}

function $hide_1(this$static){
  $hide_0(this$static);
  !!this$static.background && $hide_3(this$static.background);
}

function $initialize(this$static, options){
  var parent_0;
  $clear(this$static);
  if ((options & 4) == 4) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-grey');
  }
   else if ((options & 8) == 8) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox-blue');
    $add(this$static, this$static.panelbox);
  }
   else if ((options & 2) == 2) {
    this$static.panelbox = $GWTCBox_0(new GWTCBox, 'GWTCBox');
    $add(this$static, this$static.panelbox);
  }
   else {
    this$static.panel = $DockPanel(new DockPanel);
    $add(this$static, this$static.panel);
  }
  this$static.isAnimationEnabled = (options & 32) == 32;
  if ((options & 16) != 16) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel);
    (options & 64) != 64 && $addDomHandler(this$static.background, $GWTCPopupBox$1(new GWTCPopupBox$1, this$static), ($clinit_23() , $clinit_23() , TYPE));
  }
  this$static.element_0.style['zIndex'] = '999';
  !!this$static.background && (this$static.background.element_0.style['zIndex'] = '998' , undefined);
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $getStyleElement_1($getFirstChildElement(($clinit_56() , this$static.element_0)))['className'] = 'GWTCPopupBox';
  !!this$static.panelbox && $addStyleName(this$static, getStylePrimaryName((parent_0 = $getFirstChildElement(this$static.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)) + '-box');
}

function add_2(w){
  $add_1(this, w, ($clinit_240() , NORTH));
}

function center_0(){
  this.desiredWidth = 'auto';
  $maybeUpdateSize(this);
  'auto'.length == 0 && (this.desiredWidth = null);
  $center(this);
}

function getClass_6(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit;
}

function hide_0(){
  $hide_0(this);
  !!this.background && $hide_3(this.background);
}

function show_0(){
  !!this.background && $show_1(this.background);
  $show(this);
}

function GWTCPopupBox(){
}

_ = GWTCPopupBox.prototype = new PopupPanel;
_.add = add_2;
_.center_0 = center_0;
_.getClass$ = getClass_6;
_.hide = hide_0;
_.show = show_0;
_.typeId$ = 8;
_.background = null;
_.panel = null;
_.panelbox = null;
function $GWTCAlert(this$static){
  $PopupPanel_0(this$static, false);
  $initialize_0(this$static, 64);
  $initialize_0(this$static, 64);
  return this$static;
}

function $alert(this$static, s){
  this$static.txt.element_0.innerHTML = $replaceAll($replaceAll(s, '\\n', '<br/>'), ' ', '&nbsp;') || '';
  this$static.desiredWidth = 'auto';
  $maybeUpdateSize(this$static);
  'auto'.length == 0 && (this$static.desiredWidth = null);
  $center(this$static);
}

function $initialize_0(this$static, options){
  var parent_0;
  $initialize(this$static, options);
  this$static.contentTable = $FlexTable(new FlexTable);
  this$static.txt = $HTML(new HTML);
  this$static.okButton = $GWTCButton_0(new GWTCButton, 'OK');
  $setImage(this$static.okButton, $Image_0(new Image_0, $dialogOk(($clinit_32() , new com_google_code_p_gwtchismes_client_bundles_ButtonImages_default_StaticClientBundleGenerator))));
  (options & 1) == 1 && (this$static.okButtonDisabled = true);
  this$static.contentTable.getStyleElement()['className'] = 'panel';
  $addStyleName_1(this$static.contentTable.cellFormatter, 0, 0, 'msgCell');
  $setWidget_2(this$static.contentTable, 0, 0, this$static.txt);
  $addStyleName_1(this$static.contentTable.cellFormatter, 1, 0, 'btnCell');
  $setWidget_2(this$static.contentTable, 1, 0, this$static.okButton);
  $addStyleName_0(this$static.okButton, 'okButton');
  $addStyleName_0(this$static.okButton, 'gwtc-alert-rndbutton');
  $addDomHandler(this$static.okButton, $GWTCAlert$1(new GWTCAlert$1, this$static), ($clinit_23() , $clinit_23() , TYPE));
  $setVisible_1(this$static.okButton, !this$static.okButtonDisabled);
  $getStyleElement_1($getFirstChildElement(($clinit_56() , this$static.element_0)))['className'] = 'GWTCAlert';
  ((options & 4) == 4 || (options & 8) == 8 || (options & 2) == 2) && $addStyleName(this$static, getStylePrimaryName((parent_0 = $getFirstChildElement(this$static.element_0).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0)) + '-box');
  $add_1(this$static, this$static.contentTable, ($clinit_240() , NORTH));
}

function addClickHandler(handler){
  return $addDomHandler(this.okButton, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function getClass_7(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit;
}

function hide_1(){
  $hide_0(this);
  !!this.background && $hide_3(this.background);
}

function show_1(){
  !!this.background && $show_1(this.background);
  $show(this);
  $setFocus_0(this.okButton, true);
}

function GWTCAlert(){
}

_ = GWTCAlert.prototype = new GWTCPopupBox;
_.addClickHandler = addClickHandler;
_.getClass$ = getClass_7;
_.hide = hide_1;
_.show = show_1;
_.typeId$ = 9;
_.contentTable = null;
_.okButton = null;
_.okButtonDisabled = false;
_.txt = null;
function $GWTCAlert$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_8(){
  return Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit;
}

function onClick(event_0){
  $hide_1(this.this$0);
}

function GWTCAlert$1(){
}

_ = GWTCAlert$1.prototype = new Object_0;
_.getClass$ = getClass_8;
_.onClick = onClick;
_.typeId$ = 10;
_.this$0 = null;
function $clinit_8(){
  $clinit_8 = nullMethod;
  DEFAULT_ROW_STYLENAMES = initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['top', 'middle', 'bottom']);
}

function $DecoratorPanel(this$static, rowStyles, containerIndex){
  var i, row, table, trElem;
  $clinit_8();
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'table');
  table = this$static.element_0;
  this$static.tbody = $createElement($doc, 'tbody');
  table.appendChild(this$static.tbody);
  table['cellSpacing'] = 0;
  table['cellPadding'] = 0;
  for (i = 0; i < rowStyles.length; ++i) {
    row = (trElem = $createElement($doc, 'tr') , trElem['className'] = rowStyles[i] , trElem.appendChild(createTD(rowStyles[i] + 'Left')) , trElem.appendChild(createTD(rowStyles[i] + 'Center')) , trElem.appendChild(createTD(rowStyles[i] + 'Right')) , trElem);
    this$static.tbody.appendChild(row);
    i == containerIndex && (this$static.containerElem = $getFirstChildElement(row.children[1]));
  }
  this$static.element_0['className'] = 'gwt-DecoratorPanel';
  return this$static;
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement(($clinit_56() , $doc), 'td');
  inner = $createElement($doc, 'div');
  tdElem.appendChild(inner);
  tdElem['className'] = styleName;
  inner['className'] = styleName + 'Inner';
  return tdElem;
}

function getClass_9(){
  return Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit;
}

function getContainerElement_1(){
  return this.containerElem;
}

function DecoratorPanel(){
}

_ = DecoratorPanel.prototype = new SimplePanel;
_.getClass$ = getClass_9;
_.getContainerElement = getContainerElement_1;
_.typeId$ = 11;
_.containerElem = null;
_.tbody = null;
var DEFAULT_ROW_STYLENAMES;
function $clinit_9(){
  $clinit_9 = nullMethod;
  $clinit_8();
}

function $GWTCBox_0(this$static, style){
  $clinit_9();
  $DecoratorPanel(this$static, DEFAULT_ROW_STYLENAMES, 1);
  this$static.title = $HTML(new HTML);
  this$static.text_0 = $HTML(new HTML);
  this$static.panel = $DockPanel(new DockPanel);
  $add(this$static, this$static.panel);
  this$static.panel.getStyleElement()['className'] = 'panel';
  this$static.element_0['className'] = 'GWTCBox';
  $add_6(this$static.panel, this$static.title, ($clinit_240() , NORTH));
  $add_6(this$static.panel, this$static.text_0, NORTH);
  !$equals_1('GWTCBox', style) && setStyleName(this$static.element_0, style, true);
  return this$static;
}

function $add_2(this$static, object, direction){
  $add_6(this$static.panel, objectToWidget(object), direction);
}

function add_3(w){
  $add_2(this, w, ($clinit_240() , NORTH));
}

function getClass_10(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit;
}

function iterator_0(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this.panel.children_0);
}

function objectToWidget(object){
  var html_0;
  $clinit_9();
  var element, html;
  if (!object) {
    html = null;
  }
   else if (object) {
    html = object;
  }
   else {
    element = throwClassCastExceptionUnlessNull(object);
    $equalsIgnoreCase($getTagName(($clinit_56() , element)), 'div') || $equalsIgnoreCase($getTagName(element), 'span')?(html = (html_0 = $HTML_1(new HTML, element) , $onAttach(html_0) , $clinit_288() , $add_16(widgetsToDetach, html_0) , html_0)):(html = $GWTCBox$2(new GWTCBox$2, element));
  }
  return html;
}

function remove_1(w){
  return $remove_3(this.panel, w);
}

function setWidth_1(width){
  var topCenter;
  this.element_0.style['width'] = width;
  topCenter = $getChild($getChild(this.element_0.children[0], 0), 1);
  $equals_1(width, 'auto')?(topCenter.style['width'] = 'auto' , undefined):(topCenter.style['width'] = '100%' , undefined);
}

function GWTCBox(){
}

_ = GWTCBox.prototype = new DecoratorPanel;
_.add = add_3;
_.getClass$ = getClass_10;
_.iterator_0 = iterator_0;
_.remove = remove_1;
_.setWidth = setWidth_1;
_.typeId$ = 12;
function $GWTCBox$2(this$static, $anonymous0){
  this$static.element_0 = $anonymous0;
  return this$static;
}

function getClass_11(){
  return Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit;
}

function GWTCBox$2(){
}

_ = GWTCBox$2.prototype = new SimplePanel;
_.getClass$ = getClass_11;
_.typeId$ = 13;
function $setElement_0(this$static, elem){
  this$static.element_0 = elem;
  this$static.element_0.tabIndex = 0;
}

function addClickHandler_0(handler){
  return $addDomHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function addMouseOutHandler(handler){
  return $addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler(handler){
  return $addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function getClass_12(){
  return Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit;
}

function setEnabled(enabled){
  this.getElement_0()['disabled'] = !enabled;
}

function setFocus(focused){
  focused?$focus_0(this.getElement_0()):(this.getElement_0().blur() , undefined);
}

function setTabIndex(index){
  this.getElement_0().tabIndex = index;
}

function FocusWidget(){
}

_ = FocusWidget.prototype = new Widget;
_.addClickHandler = addClickHandler_0;
_.addMouseOutHandler = addMouseOutHandler;
_.addMouseOverHandler = addMouseOverHandler;
_.getClass$ = getClass_12;
_.setEnabled = setEnabled;
_.setFocus = setFocus;
_.setTabIndex = setTabIndex;
_.typeId$ = 14;
function $ButtonBase(this$static, elem){
  this$static.element_0 = elem;
  this$static.setTabIndex(0);
  return this$static;
}

function getClass_13(){
  return Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit;
}

function getText(){
  return ($clinit_56() , this.getElement_0()).innerText;
}

function setHTML(html){
  this.getElement_0().innerHTML = html || '';
}

function setText(text){
  ($clinit_56() , this.getElement_0()).innerText = text || '';
}

function ButtonBase(){
}

_ = ButtonBase.prototype = new FocusWidget;
_.getClass$ = getClass_13;
_.getText = getText;
_.setHTML = setHTML;
_.setText = setText;
_.typeId$ = 15;
function $Button(this$static){
  $ButtonBase(this$static, ($clinit_56() , $doc).createElement("<BUTTON type='button'><\/BUTTON>"));
  this$static.setStyleName('gwt-Button');
  return this$static;
}

function $Button_0(this$static, html){
  $ButtonBase(this$static, ($clinit_56() , $doc).createElement("<BUTTON type='button'><\/BUTTON>"));
  this$static.setStyleName('gwt-Button');
  this$static.setHTML(html);
  return this$static;
}

function getClass_14(){
  return Lcom_google_gwt_user_client_ui_Button_2_classLit;
}

function Button(){
}

_ = Button.prototype = new ButtonBase;
_.getClass$ = getClass_14;
_.typeId$ = 16;
function $GWTCButton_0(this$static, html){
  $ButtonBase(this$static, ($clinit_56() , $doc).createElement("<BUTTON type='button'><\/BUTTON>"));
  (!this$static.element && (this$static.element = this$static.element_0) , this$static.element)['className'] = 'gwt-Button';
  !!this$static.container && (setStyleName(this$static.container.getStyleElement(), 'gwt-Button', true) , undefined);
  this$static.mouseOverHandler = $GWTCButton$1(new GWTCButton$1, this$static);
  this$static.mouseOutHandler = $GWTCButton$2(new GWTCButton$2, this$static);
  this$static.mouseDownHandler = $GWTCButton$3(new GWTCButton$3, this$static);
  this$static.focusHandler = $GWTCButton$4(new GWTCButton$4, this$static);
  this$static.blurHandler = $GWTCButton$5(new GWTCButton$5, this$static);
  this$static.keyPressHandler = $GWTCButton$6(new GWTCButton$6, this$static);
  $setType(this$static, 1);
  $setHTML_0(this$static, html);
  return this$static;
}

function $addMouseDownHandler(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_127() , $clinit_127() , TYPE_6)):$addDomHandler(this$static, handler, ($clinit_127() , $clinit_127() , TYPE_6));
}

function $addMouseOutHandler_0(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_131() , $clinit_131() , TYPE_8)):$addDomHandler(this$static, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function $addMouseOverHandler_0(this$static, handler){
  return this$static.container?$addDomHandler(this$static.textPanel, handler, ($clinit_133() , $clinit_133() , TYPE_9)):$addDomHandler(this$static, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function $addStyleName_0(this$static, style){
  setStyleName((!this$static.element && (this$static.element = this$static.element_0) , this$static.element), style, true);
  !!this$static.container && $addStyleName(this$static.container, style);
}

function $assertLeftTD(this$static){
  if (this$static.textPosIdx == 1) {
    $insertCell(this$static.container, 0, this$static.textPosIdx);
    $getElement_1(this$static.container.cellFormatter, 0, 1).className = 'GWTCBtn-ml';
    this$static.textPosIdx = 2;
  }
}

function $removeStyleName_0(this$static, style){
  setStyleName((!this$static.element && (this$static.element = this$static.element_0) , this$static.element), style, false);
  !!this$static.container && $removeStyleName(this$static.container, style);
}

function $replaceElement_1(this$static, element){
  var parent_0, parent_1;
  if (this$static.element) {
    parent_0 = (parent_1 = ($clinit_56() , this$static.element).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1);
    if (parent_0) {
      parent_0.removeChild(this$static.element);
      parent_0.appendChild(element);
    }
  }
  this$static.element = element;
}

function $setFocus_0(this$static, focused){
  var $e0, e;
  try {
    !this$static.container?(focused?$focus_0(this$static.getElement_0()):(this$static.getElement_0().blur() , undefined) , undefined):$setFocus_1(this$static.textPanel, focused);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 2)) {
      e = $e0;
      'Error, (hosted mode & GWT 1.5.3 make this fail) ' + e.getMessage();
    }
     else 
      throw $e0;
  }
}

function $setHTML_0(this$static, html){
  if (!this$static.container) {
    (!this$static.element && (this$static.element = this$static.element_0) , this$static.element).innerHTML = html || '';
  }
   else {
    $clear(this$static.textPanel);
    $setWidget(this$static.textPanel, $HTML_0(new HTML, html));
    this$static.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function $setImage(this$static, img){
  img.getElement_0()['className'] = 'GWTCBtn-img';
  $assertLeftTD(this$static);
  $setWidget_2(this$static.container, 0, 1, img);
}

function $setStyleName_0(this$static, style){
  (!this$static.element && (this$static.element = this$static.element_0) , this$static.element)['className'] = style;
  !!this$static.container && $addStyleName(this$static.container, style);
}

function $setType(this$static, type){
  var text;
  text = !this$static.container?($clinit_56() , !this$static.element && (this$static.element = this$static.element_0) , this$static.element).innerHTML:($clinit_56() , $getElement_1(this$static.container.cellFormatter, 0, this$static.textPosIdx)).innerHTML;
  this$static.element = null;
  if (this$static.container) {
    text = null;
    $clear_0(this$static.container, false);
  }
  this$static.container = null;
  if (type == 0) {
    $setStyleName_0(this$static, 'GWTCBtn');
    $addStyleName_0(this$static, 'gwt-Button');
  }
   else {
    this$static.container = $FlexTable(new FlexTable);
    this$static.container.getStyleElement()['className'] = 'GWTCBtn';
    this$static.container.tableElem['cellSpacing'] = 0;
    this$static.container.tableElem['cellPadding'] = 0;
    $setHTML_2(this$static.container, 0, 0, '&nbsp;');
    $setStyleName_1(this$static.container.cellFormatter, 0, 0, 'GWTCBtn-l');
    $setStyleName_1(this$static.container.cellFormatter, 0, 1, 'GWTCBtn-c');
    this$static.textPanel = $FocusPanel(new FocusPanel);
    $addDomHandler(this$static.textPanel, this$static.focusHandler, ($clinit_100() , $clinit_100() , TYPE_3));
    $addDomHandler(this$static.textPanel, this$static.blurHandler, ($clinit_91() , $clinit_91() , TYPE_0));
    $addDomHandler(this$static.textPanel, this$static.keyPressHandler, ($clinit_122() , $clinit_122() , TYPE_4));
    $addDomHandler(this$static.textPanel, this$static.mouseDownHandler, ($clinit_127() , $clinit_127() , TYPE_6));
    $addDomHandler(this$static.textPanel, this$static.mouseOverHandler, ($clinit_133() , $clinit_133() , TYPE_9));
    $addDomHandler(this$static.textPanel, this$static.mouseOutHandler, ($clinit_131() , $clinit_131() , TYPE_8));
    this$static.textPanel.getStyleElement()['className'] = 'GWTCBtn-focus';
    $setWidget_2(this$static.container, 0, 1, this$static.textPanel);
    $setHTML_2(this$static.container, 0, 2, '&nbsp;');
    $setStyleName_1(this$static.container.cellFormatter, 0, 2, 'GWTCBtn-r');
    $replaceElement_1(this$static, this$static.container.element_0);
  }
  $addMouseDownHandler(this$static, this$static.mouseDownHandler);
  $addMouseOverHandler_0(this$static, this$static.mouseOverHandler);
  $addMouseOutHandler_0(this$static, this$static.mouseOutHandler);
  $setHTML_0(this$static, text);
}

function $setVisible_1(this$static, visible){
  (!this$static.element && (this$static.element = this$static.element_0) , this$static.element).style.display = visible?'':'none';
  !!this$static.container && $setVisible(this$static.container, visible);
}

function addClickHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function addMouseOutHandler_0(handler){
  return this.container?$addDomHandler(this.textPanel, handler, ($clinit_131() , $clinit_131() , TYPE_8)):$addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler_0(handler){
  return this.container?$addDomHandler(this.textPanel, handler, ($clinit_133() , $clinit_133() , TYPE_9)):$addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function addStyleName_0(style){
  $addStyleName_0(this, style);
}

function getClass_15(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit;
}

function getElement_0(){
  return !this.element && (this.element = this.element_0) , this.element;
}

function getText_0(){
  return !this.container?($clinit_56() , !this.element && (this.element = this.element_0) , this.element).innerText:$getText_0(this.container, 0, this.textPosIdx);
}

function onBrowserEvent_0(event_0){
  var mevent;
  mevent = $eventGetTypeInt(($clinit_56() , event_0).type);
  if (this.enabled) {
    if (mevent == 1) {
      $removeStyleName_0(this, getStylePrimaryName((!this.element && (this.element = this.element_0) , this.element)) + '-over');
      $fireEvent(this, ($clinit_24() , $clinit_23() , new GWTCButton$7));
      $removeStyleName_0(this, getStylePrimaryName((!this.element && (this.element = this.element_0) , this.element)) + '-down');
    }
     else 
      this.container?$onBrowserEvent(this.textPanel, event_0):$onBrowserEvent(this, event_0);
  }
   else {
    $onBrowserEvent(this, event_0);
  }
}

function removeStyleName_0(style){
  $removeStyleName_0(this, style);
}

function setEnabled_0(enabled){
  this.enabled = enabled;
  enabled?$removeStyleName_0(this, getStylePrimaryName((!this.element && (this.element = this.element_0) , this.element)) + '-disabled'):$addStyleName_0(this, getStylePrimaryName((!this.element && (this.element = this.element_0) , this.element)) + '-disabled');
}

function setFocus_0(focused){
  $setFocus_0(this, focused);
}

function setHTML_0(html){
  $setHTML_0(this, html);
}

function setStyleName_1(style){
  $setStyleName_0(this, style);
}

function setTabIndex_0(index){
  !this.container?((!this.element && (this.element = this.element_0) , this.element).tabIndex = index , undefined):(this.textPanel.element_0.tabIndex = index , undefined);
}

function setText_0(txt){
  if (!this.container) {
    ($clinit_56() , !this.element && (this.element = this.element_0) , this.element).innerText = txt || '';
  }
   else {
    $clear(this.textPanel);
    $setWidget(this.textPanel, $Label_0(new Label, txt));
    this.textPanel.widget.setStyleName('GWTCBtn-text');
  }
}

function setVisible_2(visible){
  $setVisible_1(this, visible);
}

function toString_2(){
  return !this.container?$toString(this):$toString(this.container);
}

function GWTCButton(){
}

_ = GWTCButton.prototype = new Button;
_.addClickHandler = addClickHandler_1;
_.addMouseOutHandler = addMouseOutHandler_0;
_.addMouseOverHandler = addMouseOverHandler_0;
_.addStyleName_0 = addStyleName_0;
_.getClass$ = getClass_15;
_.getElement_0 = getElement_0;
_.getText = getText_0;
_.onBrowserEvent = onBrowserEvent_0;
_.removeStyleName = removeStyleName_0;
_.setEnabled = setEnabled_0;
_.setFocus = setFocus_0;
_.setHTML = setHTML_0;
_.setStyleName = setStyleName_1;
_.setTabIndex = setTabIndex_0;
_.setText = setText_0;
_.setVisible = setVisible_2;
_.toString$ = toString_2;
_.typeId$ = 17;
_.container = null;
_.element = null;
_.enabled = true;
_.textPanel = null;
_.textPosIdx = 1;
function $GWTCButton$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_16(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit;
}

function onMouseOver(event_0){
  $addStyleDependentName(this.this$0, 'over');
}

function GWTCButton$1(){
}

_ = GWTCButton$1.prototype = new Object_0;
_.getClass$ = getClass_16;
_.onMouseOver = onMouseOver;
_.typeId$ = 18;
_.this$0 = null;
function $GWTCButton$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_17(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit;
}

function onMouseOut(event_0){
  $removeStyleDependentName(this.this$0, 'down');
  $removeStyleDependentName(this.this$0, 'over');
}

function GWTCButton$2(){
}

_ = GWTCButton$2.prototype = new Object_0;
_.getClass$ = getClass_17;
_.onMouseOut = onMouseOut;
_.typeId$ = 19;
_.this$0 = null;
function $GWTCButton$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_18(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit;
}

function onMouseDown(event_0){
  $addStyleDependentName(this.this$0, 'down');
}

function GWTCButton$3(){
}

_ = GWTCButton$3.prototype = new Object_0;
_.getClass$ = getClass_18;
_.onMouseDown = onMouseDown;
_.typeId$ = 20;
_.this$0 = null;
function $GWTCButton$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_19(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$4_2_classLit;
}

function GWTCButton$4(){
}

_ = GWTCButton$4.prototype = new Object_0;
_.getClass$ = getClass_19;
_.typeId$ = 21;
_.this$0 = null;
function $GWTCButton$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_20(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$5_2_classLit;
}

function GWTCButton$5(){
}

_ = GWTCButton$5.prototype = new Object_0;
_.getClass$ = getClass_20;
_.typeId$ = 22;
_.this$0 = null;
function $GWTCButton$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_21(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$6_2_classLit;
}

function GWTCButton$6(){
}

_ = GWTCButton$6.prototype = new Object_0;
_.getClass$ = getClass_21;
_.typeId$ = 23;
_.this$0 = null;
function getClass_22(){
  return Lcom_google_gwt_event_shared_GwtEvent_2_classLit;
}

function revive(){
  this.dead = false;
  this.source = null;
}

function toString_3(){
  return 'An event type';
}

function GwtEvent(){
}

_ = GwtEvent.prototype = new Object_0;
_.getClass$ = getClass_22;
_.revive = revive;
_.toString$ = toString_3;
_.typeId$ = 0;
_.dead = false;
_.source = null;
function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, typeKey;
  if (registered) {
    typeKey = dynamicCast(registered.map[($clinit_56() , nativeEvent).type], 9);
    if (typeKey) {
      currentNative = typeKey.flyweight.nativeEvent;
      currentRelativeElem = typeKey.flyweight.relativeElem;
      typeKey.flyweight.nativeEvent = nativeEvent;
      typeKey.flyweight.relativeElem = relativeElem;
      $fireEvent(handlerSource, typeKey.flyweight);
      typeKey.flyweight.nativeEvent = currentNative;
      typeKey.flyweight.relativeElem = currentRelativeElem;
    }
  }
}

function getAssociatedType(){
  return this.getAssociatedType_0();
}

function getClass_23(){
  return Lcom_google_gwt_event_dom_client_DomEvent_2_classLit;
}

function DomEvent(){
}

_ = DomEvent.prototype = new GwtEvent;
_.getAssociatedType = getAssociatedType;
_.getClass$ = getClass_23;
_.typeId$ = 0;
_.nativeEvent = null;
_.relativeElem = null;
var registered = null;
function $clinit_23(){
  $clinit_23 = nullMethod;
  TYPE = $DomEvent$Type(new DomEvent$Type, 'click', ($clinit_23() , new ClickEvent));
}

function dispatch(p0){
  dynamicCast(p0, 8).onClick(this);
}

function getAssociatedType_0(){
  return TYPE;
}

function getClass_24(){
  return Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit;
}

function ClickEvent(){
}

_ = ClickEvent.prototype = new DomEvent;
_.dispatch = dispatch;
_.getAssociatedType_0 = getAssociatedType_0;
_.getClass$ = getClass_24;
_.typeId$ = 0;
var TYPE;
function $clinit_24(){
  $clinit_24 = nullMethod;
  $clinit_23();
}

function getClass_25(){
  return Lcom_google_code_p_gwtchismes_client_GWTCButton$7_2_classLit;
}

function GWTCButton$7(){
}

_ = GWTCButton$7.prototype = new ClickEvent;
_.getClass$ = getClass_25;
_.typeId$ = 0;
function $FocusPanel(this$static){
  this$static.element_0 = $createFocusable();
  return this$static;
}

function $setFocus_1(this$static, focused){
  focused?$focus_0(this$static.element_0):(this$static.element_0.blur() , undefined);
}

function addClickHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function addMouseOutHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function getClass_26(){
  return Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit;
}

function FocusPanel(){
}

_ = FocusPanel.prototype = new SimplePanel;
_.addClickHandler = addClickHandler_2;
_.addMouseOutHandler = addMouseOutHandler_1;
_.addMouseOverHandler = addMouseOverHandler_1;
_.getClass$ = getClass_26;
_.typeId$ = 24;
function $GWTCGlassPanel(this$static){
  this$static.element_0 = $createFocusable();
  setStyleName(this$static.element_0, 'GWTCGlassPanel', true);
  this$static.element_0.style['zIndex'] = '998';
  return this$static;
}

function $hide_3(this$static){
  this$static.element_0.style['width'] = '0px';
  this$static.element_0.style['height'] = '0px';
  this$static.element_0.style.display = 'none';
}

function $show_1(this$static){
  !this$static.attached && $add_5(($clinit_288() , get_0(null)), this$static, 0, 0);
  this$static.element_0.style.display = '';
  maximizeWidget(this$static);
}

function getClass_27(){
  return Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit;
}

function GWTCGlassPanel(){
}

_ = GWTCGlassPanel.prototype = new FocusPanel;
_.getClass$ = getClass_27;
_.typeId$ = 25;
function getWindowScrollHeight(){
  try {
    return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollHeight:$doc.body.scrollHeight;
  }
   catch (e) {
    alert('getWindowScrollHeight ' + $doc.compatMode + ' ' + e);
    return 100;
  }
}

function getWindowScrollWidth(){
  try {
    return $doc.compatMode == 'CSS1Compat'?$doc.documentElement.scrollWidth:$doc.body.scrollWidth;
  }
   catch (e) {
    alert('getWindowScrollWidth ' + $doc.compatMode + ' ' + e);
    return 100;
  }
}

function internationalize(s, os){
  var c, i, o, pos, trail;
  for (i = 0; i < os.length; ++i) {
    o = '' + (os[i] != null?os[i]:'');
    c = '{' + i + '}';
    for (;;) {
      pos = s.indexOf(c);
      if (pos < 0)
        break;
      trail = '';
      pos + c.length < s.length && (trail = $substring(s, pos + c.length));
      s = s.substr(0, pos - 0) + o + trail;
    }
  }
  return s;
}

function internationalize_0(s, o){
  var os;
  os = initValues(_3Ljava_lang_Object_2_classLit, 238, 0, [o]);
  return internationalize(s, os);
}

function maximizeWidget(widget){
  var h, w;
  if (!widget)
    return;
  w = max_1($doc.documentElement.clientWidth || $doc.body.clientWidth, max_1(getWindowScrollWidth(), ($clinit_288() , parseInt(get_0(null).element_0['offsetWidth']) || 0)));
  h = max_1($doc.documentElement.clientHeight || $doc.body.clientHeight, max_1(getWindowScrollHeight(), parseInt(get_0(null).element_0['offsetHeight']) || 0));
  widget.element_0.style['width'] = w + 'px';
  widget.element_0.style['height'] = h + 'px';
}

function $GWTCPopupBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_28(){
  return Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit;
}

function onClick_0(event_0){
  $hide_1(this.this$0);
}

function GWTCPopupBox$1(){
}

_ = GWTCPopupBox$1.prototype = new Object_0;
_.getClass$ = getClass_28;
_.onClick = onClick_0;
_.typeId$ = 26;
_.this$0 = null;
function $initWidget(this$static, widget){
  if (this$static.widget) {
    throw $IllegalStateException_0(new IllegalStateException, 'Composite.initWidget() may only be called once.');
  }
  $removeFromParent(widget);
  $setElement(this$static, widget.element_0);
  this$static.widget = widget;
  $setParent(widget, this$static);
}

function $onAttach_0(this$static){
  if (this$static.eventsToSink != -1) {
    $sinkEvents(this$static.widget, this$static.eventsToSink);
    this$static.eventsToSink = -1;
  }
  this$static.widget.onAttach();
  this$static.element_0.__listener = this$static;
}

function getClass_29(){
  return Lcom_google_gwt_user_client_ui_Composite_2_classLit;
}

function isAttached_0(){
  if (this.widget) {
    return this.widget.attached;
  }
  return false;
}

function onAttach_0(){
  $onAttach_0(this);
}

function onBrowserEvent_1(event_0){
  $onBrowserEvent(this, event_0);
  this.widget.onBrowserEvent(event_0);
}

function onDetach_0(){
  this.widget.onDetach();
}

function Composite(){
}

_ = Composite.prototype = new Widget;
_.getClass$ = getClass_29;
_.isAttached = isAttached_0;
_.onAttach = onAttach_0;
_.onBrowserEvent = onBrowserEvent_1;
_.onDetach = onDetach_0;
_.typeId$ = 27;
_.widget = null;
function $GWTCProgress(this$static, elements, options){
  this$static.contentTable = $FlexTable(new FlexTable);
  this$static.remainLabel = $Label(new Label);
  this$static.textLabel = $Label(new Label);
  this$static.numberLabel = $Label(new Label);
  this$static.startTime = fromDouble((new Date).getTime());
  $initialize_1(this$static, options, elements);
  return this$static;
}

function $hide_4(this$static){
  this$static.contentTable.getElement_0().style.display = 'none';
  if (!this$static.showAsDialog)
    return;
  !!this$static.background && $hide_3(this$static.background);
  $hide_5(this$static.progressDlg);
}

function $initialize_1(this$static, options, elements){
  var col, containerElementGrid, elm, loop, row, td, td_0;
  (options & 1) == 1 && (this$static.showRemaining = true);
  (options & 2) == 2 && (this$static.showText = true);
  (options & 4) == 4 && (this$static.showNumbers = true);
  (options & 8) == 8 && (this$static.showAsDialog = true);
  (options & 16) == 16 && (this$static.showText = this$static.showLeftText = true);
  this$static.elements = elements;
  this$static.contentTable.getStyleElement()['className'] = 'GWTCProgress';
  this$static.numberLabel.getStyleElement()['className'] = 'prg-numbers';
  this$static.remainLabel.getStyleElement()['className'] = 'prg-time';
  this$static.textLabel.getStyleElement()['className'] = 'prg-title';
  containerElementGrid = $Grid_0(new Grid, 1, 1);
  containerElementGrid.element_0['className'] = 'prg-bar-outer';
  containerElementGrid.tableElem['cellPadding'] = 0;
  containerElementGrid.tableElem['cellSpacing'] = 0;
  this$static.elementGrid = $Grid_0(new Grid, 1, elements);
  this$static.elementGrid.getStyleElement()['className'] = 'prg-bar-inner';
  this$static.elementGrid.tableElem['cellPadding'] = 0;
  this$static.elementGrid.tableElem['cellSpacing'] = 0;
  $setWidget_2(containerElementGrid, 0, 0, this$static.elementGrid);
  for (loop = 0; loop < elements; ++loop) {
    elm = $Grid_0(new Grid, 1, 1);
    elm.prepareCell(0, 0);
    td = (td_0 = elm.cellFormatter.this$0.bodyElem.rows[0].cells[0] , $internalClearCell(elm, td_0, false) , td_0);
    td.innerHTML = '';
    elm.element_0['className'] = 'prg-bar-done';
    setStyleName(elm.element_0, 'prg-bar-element', true);
    $setWidget_2(this$static.elementGrid, 0, loop, elm);
  }
  row = 0;
  col = 0;
  this$static.showLeftText?$setWidget_2(this$static.contentTable, row, col++, this$static.textLabel):this$static.showText && $setWidget_2(this$static.contentTable, row++, col, this$static.textLabel);
  this$static.showNumbers && $setWidget_2(this$static.contentTable, row, col + 1, this$static.numberLabel);
  $setWidget_2(this$static.contentTable, row++, col, containerElementGrid);
  $setWidget_2(this$static.contentTable, row++, col, this$static.remainLabel);
  $setProgress_0(this$static, 0, 0, 0);
  if (this$static.showAsDialog) {
    this$static.background = $GWTCGlassPanel(new GWTCGlassPanel);
    this$static.progressDlg = $DialogBox(new DialogBox);
    $setWidget_1(this$static.progressDlg, this$static.contentTable);
    this$static.progressDlg.getStyleElement()['className'] = 'GWTCProgress';
    $addStyleDependentName(this$static.progressDlg, 'dialog');
    $center(this$static.progressDlg);
    $hide_4(this$static);
    $initWidget(this$static, $SimplePanel(new SimplePanel));
  }
   else {
    $initWidget(this$static, this$static.contentTable);
  }
}

function $setProgress(this$static, done, total){
  var percent;
  percent = total > 0?~~(done * 100 / total):0;
  $setProgress_0(this$static, percent, done, total);
}

function $setProgress_0(this$static, percentage, done, total){
  var completed, elm, loop, message, os, remainText, remaining, soFar, velocity;
  percentage = (percentage > 0?percentage:0) < 100?percentage > 0?percentage:0:100;
  completed = ~~(this$static.elements * percentage / 100);
  for (loop = 0; loop < this$static.elements; ++loop) {
    elm = dynamicCast($getWidget_0(this$static.elementGrid, 0, loop), 3);
    if (loop < completed) {
      elm.element_0['className'] = 'prg-bar-done';
      setStyleName(elm.element_0, 'prg-bar-element', true);
    }
     else {
      elm.element_0['className'] = 'prg-bar-blank';
      setStyleName(elm.element_0, 'prg-bar-element', true);
    }
  }
  this$static.remainLabel.element_0.innerHTML = '&nbsp;';
  this$static.numberLabel.element_0.innerHTML = '&nbsp;';
  soFar = sub(fromDouble((new Date).getTime()), this$static.startTime);
  if (percentage > 0) {
    if (this$static.showRemaining) {
      remaining = div_0(div_0(mul(soFar, fromInt(100 - percentage)), fromInt(percentage)), P3e8_longLit);
      remainText = this$static.secondsMessage;
      if (compare_0(remaining, P78_longLit) > 0) {
        remaining = div_0(remaining, P3c_longLit);
        remainText = this$static.minutesMessage;
        if (compare_0(remaining, P78_longLit) > 0) {
          remaining = div_0(remaining, P3c_longLit);
          remainText = this$static.hoursMessage;
        }
      }
      ($clinit_56() , this$static.remainLabel.element_0).innerText = internationalize_0(remainText, '' + toString_9(remaining)) || '';
    }
  }
   else {
    this$static.startTime = fromDouble((new Date).getTime());
  }
  if (this$static.showNumbers) {
    message = total > 0?this$static.totalMessage:this$static.percentMessage;
    velocity = compare_0(soFar, P0_longLit) > 0?div_0(fromInt(done * 1000), soFar):P0_longLit;
    os = initValues(_3Ljava_lang_Object_2_classLit, 238, 0, ['' + percentage, '' + done, '' + total, '' + toString_9(velocity)]);
    ($clinit_56() , this$static.numberLabel.element_0).innerText = internationalize(message, os) || '';
  }
}

function $show_2(this$static){
  this$static.contentTable.getElement_0().style.display = '';
  if (!this$static.showAsDialog)
    return;
  !!this$static.background && $show_1(this$static.background);
  $center(this$static.progressDlg);
}

function getClass_30(){
  return Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit;
}

function GWTCProgress(){
}

_ = GWTCProgress.prototype = new Composite;
_.getClass$ = getClass_30;
_.typeId$ = 28;
_.background = null;
_.elementGrid = null;
_.elements = 20;
_.hoursMessage = 'Time remaining: {0} Hours';
_.minutesMessage = 'Time remaining: {0} Minutes';
_.percentMessage = '{0}%';
_.progressDlg = null;
_.secondsMessage = 'Time remaining: {0} Seconds';
_.showAsDialog = false;
_.showLeftText = false;
_.showNumbers = false;
_.showRemaining = false;
_.showText = false;
_.totalMessage = '{0}% {1}/{2} ';
function $clinit_32(){
  $clinit_32 = nullMethod;
  internedUrl0 = $moduleBase + '22EEB13741415E69E852552160075B4B.cache.png';
}

function $dialogOk(){
  !dialogOk && (dialogOk = $ImageResourcePrototype(new ImageResourcePrototype, internedUrl0, 30, 38, 19, 19));
  return dialogOk;
}

function getClass_31(){
  return Lcom_google_code_p_gwtchismes_client_bundles_com_1google_1code_1p_1gwtchismes_1client_1bundles_1ButtonImages_1default_1StaticClientBundleGenerator_2_classLit;
}

function com_google_code_p_gwtchismes_client_bundles_ButtonImages_default_StaticClientBundleGenerator(){
}

_ = com_google_code_p_gwtchismes_client_bundles_ButtonImages_default_StaticClientBundleGenerator.prototype = new Object_0;
_.getClass$ = getClass_31;
_.typeId$ = 0;
var dialogOk = null, internedUrl0;
function $cancel(this$static){
  if (!this$static.running) {
    return;
  }
  $remove_15(animations, this$static);
  this$static.started && $onComplete(this$static);
  this$static.started = false;
  this$static.running = false;
}

function $run(this$static, duration, startTime){
  $cancel(this$static);
  this$static.running = true;
  this$static.duration = duration;
  this$static.startTime = startTime;
  if ($update(this$static, (new Date).getTime())) {
    return;
  }
  if (!animations) {
    animations = $ArrayList(new ArrayList);
    animationTimer = ($clinit_35() , $clinit_34() , new Animation$1);
  }
  $add_13(animations, this$static);
  animations.size == 1 && $schedule(animationTimer, 25);
}

function $update(this$static, curTime){
  var finished, progress;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.started && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793 + progress * 3.141592653589793)) / 2);
    return false;
  }
  if (!this$static.started && curTime >= this$static.startTime) {
    this$static.started = true;
    this$static.offsetHeight_0 = parseInt(this$static.curPanel.element_0['offsetHeight']) || 0;
    this$static.offsetWidth_0 = parseInt(this$static.curPanel.element_0['offsetWidth']) || 0;
    this$static.curPanel.element_0.style['overflow'] = 'hidden';
    $onUpdate(this$static, (1 + Math.cos(3.141592653589793)) / 2);
  }
  if (finished) {
    $onComplete(this$static);
    this$static.started = false;
    this$static.running = false;
    return true;
  }
  return false;
}

function getClass_32(){
  return Lcom_google_gwt_animation_client_Animation_2_classLit;
}

function updateAnimations(){
  var animation, animation$array, animation$index, animation$max, curAnimations, curTime;
  curAnimations = initDim(_3Lcom_google_gwt_animation_client_Animation_2_classLit, 216, 23, animations.size, 0);
  curAnimations = dynamicCast($toArray_0(animations, curAnimations), 4);
  curTime = (new Date).getTime();
  for (animation$array = curAnimations , animation$index = 0 , animation$max = animation$array.length; animation$index < animation$max; ++animation$index) {
    animation = animation$array[animation$index];
    animation.running && $update(animation, curTime) && $remove_15(animations, animation);
  }
  animations.size > 0 && $schedule(animationTimer, 25);
}

function Animation(){
}

_ = Animation.prototype = new Object_0;
_.getClass$ = getClass_32;
_.typeId$ = 29;
_.duration = -1;
_.running = false;
_.startTime = -1;
_.started = false;
var animationTimer = null, animations = null;
function $clinit_34(){
  $clinit_34 = nullMethod;
  timers = $ArrayList(new ArrayList);
  addCloseHandler(new Timer$1);
}

function $cancel_0(this$static){
  this$static.isRepeating?($wnd.clearInterval(this$static.timerId) , undefined):($wnd.clearTimeout(this$static.timerId) , undefined);
  $remove_15(timers, this$static);
}

function $schedule(this$static, delayMillis){
  if (delayMillis <= 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'must be positive');
  }
  this$static.cancel();
  this$static.isRepeating = false;
  this$static.timerId = createTimeout(this$static, delayMillis);
  $add_13(timers, this$static);
}

function $scheduleRepeating(this$static, periodMillis){
  if (periodMillis <= 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'must be positive');
  }
  this$static.cancel();
  this$static.isRepeating = true;
  this$static.timerId = createInterval(this$static, periodMillis);
  $add_13(timers, this$static);
}

function cancel_0(){
  $cancel_0(this);
}

function createInterval(timer, period){
  return $wnd.setInterval($entry(function(){
    timer.fire();
  }
  ), period);
}

function createTimeout(timer, delay){
  return $wnd.setTimeout($entry(function(){
    timer.fire();
  }
  ), delay);
}

function fire(){
  !this.isRepeating && $remove_15(timers, this);
  this.run();
}

function getClass_33(){
  return Lcom_google_gwt_user_client_Timer_2_classLit;
}

function Timer(){
}

_ = Timer.prototype = new Object_0;
_.cancel = cancel_0;
_.fire = fire;
_.getClass$ = getClass_33;
_.typeId$ = 30;
_.isRepeating = false;
_.timerId = 0;
var timers;
function $clinit_35(){
  $clinit_35 = nullMethod;
  $clinit_34();
}

function getClass_34(){
  return Lcom_google_gwt_animation_client_Animation$1_2_classLit;
}

function run(){
  updateAnimations();
}

function Animation$1(){
}

_ = Animation$1.prototype = new Timer;
_.getClass$ = getClass_34;
_.run = run;
_.typeId$ = 31;
function getTypeName(o){
  return o == null?null:(o.typeMarker$ == nullMethod || o.typeId$ == 2?o.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
}

function $Throwable(this$static, message, cause){
  $fillInStackTrace();
  this$static.cause = cause;
  this$static.detailMessage = message;
  return this$static;
}

function $initCause(this$static, cause){
  if (this$static.cause) {
    throw $IllegalStateException_0(new IllegalStateException, "Can't overwrite cause");
  }
  if (cause == this$static) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Self-causation not permitted');
  }
  this$static.cause = cause;
  return this$static;
}

function $printStackTrace(this$static){
  var causeMessage, currentCause, msg;
  msg = $StringBuffer(new StringBuffer);
  currentCause = this$static;
  while (currentCause) {
    causeMessage = currentCause.getMessage();
    currentCause != this$static && ($appendNonNull(msg.data_0, 'Caused by: ') , undefined);
    $append_0(msg, currentCause.getClass$().typeName);
    $appendNonNull(msg.data_0, ': ');
    $append(msg.data_0, causeMessage == null?'(No exception detail)':causeMessage);
    $appendNonNull(msg.data_0, '\n');
    currentCause = currentCause.cause;
  }
}

function $setStackTrace(stackTrace){
  var c, copy, i;
  copy = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 239, 44, stackTrace.length, 0);
  for (i = 0 , c = stackTrace.length; i < c; ++i) {
    if (!stackTrace[i]) {
      throw $NullPointerException(new NullPointerException);
    }
    copy[i] = stackTrace[i];
  }
}

function $toString_0(this$static){
  var className, msg;
  className = this$static.getClass$().typeName;
  msg = this$static.getMessage();
  if (msg != null) {
    return className + ': ' + msg;
  }
   else {
    return className;
  }
}

function getClass_35(){
  return Ljava_lang_Throwable_2_classLit;
}

function getMessage(){
  return this.detailMessage;
}

function toString_4(){
  return $toString_0(this);
}

function Throwable(){
}

_ = Throwable.prototype = new Object_0;
_.getClass$ = getClass_35;
_.getMessage = getMessage;
_.toString$ = toString_4;
_.typeId$ = 32;
_.cause = null;
_.detailMessage = null;
function getClass_36(){
  return Ljava_lang_Exception_2_classLit;
}

function Exception(){
}

_ = Exception.prototype = new Throwable;
_.getClass$ = getClass_36;
_.typeId$ = 33;
function $RuntimeException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_37(){
  return Ljava_lang_RuntimeException_2_classLit;
}

function RuntimeException(){
}

_ = RuntimeException.prototype = new Exception;
_.getClass$ = getClass_37;
_.typeId$ = 34;
function $JavaScriptException(this$static, e){
  $fillInStackTrace();
  this$static.e = e;
  $createStackTrace(this$static);
  return this$static;
}

function getClass_38(){
  return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
}

function getDescription(e){
  if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getDescription0(dynamicCastJso(e));
  }
   else {
    return e + '';
  }
}

function getDescription0(e){
  return e == null?null:e.message;
}

function getMessage_0(){
  return this.message_0 == null && (this.name_0 = getName(this.e) , this.description = getDescription(this.e) , this.message_0 = '(' + this.name_0 + '): ' + this.description + getProperties(this.e) , undefined) , this.message_0;
}

function getName(e){
  if (e == null) {
    return 'null';
  }
   else if (e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2) {
    return getName0(dynamicCastJso(e));
  }
   else if (e != null && canCast(e.typeId$, 1)) {
    return 'String';
  }
   else {
    return (e.typeMarker$ == nullMethod || e.typeId$ == 2?e.getClass$():Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
  }
}

function getName0(e){
  return e == null?null:e.name;
}

function getProperties(e){
  return e != null && e.typeMarker$ != nullMethod && e.typeId$ != 2?getProperties0(dynamicCastJso(e)):'';
}

function getProperties0(e){
  var result = '';
  try {
    for (prop in e) {
      if (prop != 'name' && prop != 'message' && prop != 'toString') {
        try {
          result += '\n ' + prop + ': ' + e[prop];
        }
         catch (ignored) {
        }
      }
    }
  }
   catch (ignored) {
  }
  return result;
}

function JavaScriptException(){
}

_ = JavaScriptException.prototype = new RuntimeException;
_.getClass$ = getClass_38;
_.getMessage = getMessage_0;
_.typeId$ = 35;
_.description = null;
_.e = null;
_.message_0 = null;
_.name_0 = null;
function equals__devirtual$(this$static, other){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.equals$(other):(this$static == null?null:this$static) === (other == null?null:other);
}

function hashCode__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.hashCode$():this$static.$H || (this$static.$H = ++sNextHashId);
}

function toString__devirtual$(this$static){
  return this$static.typeMarker$ == nullMethod || this$static.typeId$ == 2?this$static.toString$():this$static.toString?this$static.toString():'[JavaScriptObject]';
}

function getClass_40(){
  return Lcom_google_gwt_core_client_Scheduler_2_classLit;
}

function Scheduler(){
}

_ = Scheduler.prototype = new Object_0;
_.getClass$ = getClass_40;
_.typeId$ = 0;
function entry_0(jsFunction){
  return function(){
    return entry0(jsFunction, this, arguments);
  }
  ;
}

function entry0(jsFunction, thisObj, arguments_0){
  var initialEntry;
  initialEntry = entryDepth++ == 0;
  try {
    return jsFunction.apply(thisObj, arguments_0);
  }
   finally {
    initialEntry && $flushFinallyCommands(($clinit_48() , INSTANCE));
    --entryDepth;
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

var entryDepth = 0, sNextHashId = 0;
function $clinit_48(){
  $clinit_48 = nullMethod;
  INSTANCE = $SchedulerImpl(new SchedulerImpl);
}

function $SchedulerImpl(this$static){
  $clinit_48();
  this$static.flusher = $SchedulerImpl$1(new SchedulerImpl$1, this$static);
  $SchedulerImpl$2(new SchedulerImpl$2, this$static);
  this$static.deferredCommands = [];
  this$static.incrementalCommands = [];
  this$static.finallyCommands = [];
  return this$static;
}

function $flushFinallyCommands(this$static){
  var oldFinally;
  oldFinally = this$static.finallyCommands;
  this$static.finallyCommands = [];
  runScheduledTasks(oldFinally, this$static.finallyCommands);
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  oldDeferred = this$static.deferredCommands;
  this$static.deferredCommands = [];
  runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  this$static.incrementalCommands = runRepeatingTasks(this$static.incrementalCommands);
}

function $isWorkQueued(this$static){
  return this$static.deferredCommands.length > 0 || this$static.incrementalCommands.length > 0;
}

function execute(cmd){
  return cmd.execute();
}

function getClass_41(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit;
}

function runRepeatingTasks(tasks){
  var canceledSomeTasks, i, length_0, newTasks, start, t;
  canceledSomeTasks = false;
  length_0 = tasks.length;
  start = (new Date).getTime();
  while ((new Date).getTime() - start < 100) {
    for (i = 0; i < length_0; ++i) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      if (!t[0].execute()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; ++i) {
      if (!tasks[i]) {
        continue;
      }
      newTasks[newTasks.length] = tasks[i];
    }
    return newTasks;
  }
   else {
    return tasks;
  }
}

function runScheduledTasks(tasks, rescheduled){
  var $e0, i, j, t;
  for (i = 0 , j = tasks.length; i < j; ++i) {
    t = tasks[i];
    try {
      t[1]?t[0].execute() && (rescheduled[rescheduled.length] = t , undefined):t[0].nullMethod();
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 5))
        throw $e0;
    }
  }
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_48();
  $wnd.setTimeout(function(){
    var ret = $entry(execute)(cmd);
    ret && $wnd.setTimeout(arguments.callee, delayMs);
  }
  , delayMs);
}

function SchedulerImpl(){
}

_ = SchedulerImpl.prototype = new Scheduler;
_.getClass$ = getClass_41;
_.typeId$ = 0;
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
function $SchedulerImpl$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_0(){
  this.this$0.flushRunning = true;
  $flushPostEventPumpCommands(this.this$0);
  this.this$0.flushRunning = false;
  return this.this$0.shouldBeRunning = $isWorkQueued(this.this$0);
}

function getClass_42(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit;
}

function SchedulerImpl$1(){
}

_ = SchedulerImpl$1.prototype = new Object_0;
_.execute = execute_0;
_.getClass$ = getClass_42;
_.typeId$ = 0;
_.this$0 = null;
function $SchedulerImpl$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_1(){
  this.this$0.flushRunning && scheduleFixedDelayImpl(this.this$0.flusher, 1);
  return this.this$0.shouldBeRunning;
}

function getClass_43(){
  return Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit;
}

function SchedulerImpl$2(){
}

_ = SchedulerImpl$2.prototype = new Object_0;
_.execute = execute_1;
_.getClass$ = getClass_43;
_.typeId$ = 0;
_.this$0 = null;
function extractNameFromToString(fnToString){
  var index, start, toReturn;
  toReturn = '';
  fnToString = $trim(fnToString);
  index = fnToString.indexOf('(');
  if (index != -1) {
    start = fnToString.indexOf('function') == 0?8:0;
    toReturn = $trim(fnToString.substr(start, index - start));
  }
  return toReturn.length > 0?toReturn:'anonymous';
}

function $collect(this$static){
  var seen = {};
  var toReturn = [];
  var callee = arguments.callee.caller.caller;
  while (callee) {
    var name_0 = this$static.extractName(callee.toString());
    toReturn.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return toReturn;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
  return toReturn;
}

function $createStackTrace(e){
  var i, j, stack, stackTrace;
  stack = (instanceOfJso(e.e)?dynamicCastJso(e.e):null , []);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 239, 44, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(stackTrace);
}

function $fillInStackTrace(){
  var i, j, stack, stackTrace;
  stack = $collect(new StackTraceCreator$Collector);
  stackTrace = initDim(_3Ljava_lang_StackTraceElement_2_classLit, 239, 44, stack.length, 0);
  for (i = 0 , j = stackTrace.length; i < j; ++i) {
    stackTrace[i] = $StackTraceElement(new StackTraceElement, 'Unknown', stack[i], 'Unknown source', 0);
  }
  $setStackTrace(stackTrace);
}

function extractName(fnToString){
  return extractNameFromToString(fnToString);
}

function getClass_44(){
  return Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit;
}

function StackTraceCreator$Collector(){
}

_ = StackTraceCreator$Collector.prototype = new Object_0;
_.extractName = extractName;
_.getClass$ = getClass_44;
_.typeId$ = 0;
function $append(a, x){
  a[a.explicitLength++] = x == null?'null':x;
}

function $appendNonNull(a, x){
  a[a.explicitLength++] = x;
}

function $toString_2(a){
  var s, s_0;
  s = (s_0 = a.join('') , a.length = a.explicitLength = 0 , s_0);
  a[a.explicitLength++] = s;
  return s;
}

function $clinit_56(){
  $clinit_56 = nullMethod;
  $clinit_58();
  new DOMImplIE6;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getScrollLeft(doc){
  return $getScrollLeft_1(($clinit_56() , $equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body));
}

function $getScrollTop(doc){
  return ($equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0;
}

function getClass_45(){
  return Lcom_google_gwt_dom_client_DOMImpl_2_classLit;
}

function DOMImpl(){
}

_ = DOMImpl.prototype = new Object_0;
_.getClass$ = getClass_45;
_.typeId$ = 0;
function $clinit_57(){
  $clinit_57 = nullMethod;
  $clinit_56();
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    container.innerHTML = '<' + tagName + '/>' || '';
    elem = $getFirstChildElement(($clinit_56() , container));
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $getBodyOffsetLeft(doc){
  return ($equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).clientLeft;
}

function $getBodyOffsetTop(doc){
  return ($equals_1(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).clientTop;
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $isOrHasChild(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  return parent_0 === child || parent_0.contains(child);
}

function getClass_46(){
  return Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit;
}

function DOMImplTrident(){
}

_ = DOMImplTrident.prototype = new DOMImpl;
_.getClass$ = getClass_46;
_.typeId$ = 0;
var currentEventTarget = null;
function $clinit_58(){
  $clinit_58 = nullMethod;
  $clinit_57();
}

function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return round_int(Math.floor($getBoundingClientRectLeft(elem) / $getZoomMultiple(doc) + $getScrollLeft(($clinit_56() , doc))));
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return round_int(Math.floor($getBoundingClientRectTop(elem) / $getZoomMultiple(doc) + $getScrollTop(($clinit_56() , doc))));
}

function $getScrollLeft_1(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return (elem.scrollLeft || 0) - ((elem.scrollWidth || 0) - elem.clientWidth);
  }
  return elem.scrollLeft || 0;
}

function $getZoomMultiple(doc){
  var bodyOffset, parent_0;
  if ($equals_1(doc.compatMode, 'CSS1Compat')) {
    return 1;
  }
   else {
    bodyOffset = doc.body.offsetWidth || 0;
    return bodyOffset == 0?1:~~(((parent_0 = ($clinit_56() , doc.body).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).offsetWidth || 0) / bodyOffset);
  }
}

function getClass_47(){
  return Lcom_google_gwt_dom_client_DOMImplIE6_2_classLit;
}

function DOMImplIE6(){
}

_ = DOMImplIE6.prototype = new DOMImplTrident;
_.getClass$ = getClass_47;
_.typeId$ = 0;
function $getClientHeight(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight;
}

function $getClientWidth(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth;
}

function $getScrollHeight(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0;
}

function $getScrollWidth(this$static){
  return ($equals_1(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0;
}

function $addClassName(this$static, className){
  var idx, last, lastPos, oldClassName;
  className = $trim(className);
  oldClassName = this$static.className;
  idx = oldClassName.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldClassName.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldClassName.length;
      if (last == lastPos || last < lastPos && oldClassName.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldClassName.indexOf(className, idx + 1);
  }
  if (idx == -1) {
    oldClassName.length > 0 && (oldClassName += ' ');
    this$static.className = oldClassName + className;
  }
}

function $removeClassName(this$static, className){
  var begin, end, idx, last, lastPos, newClassName, oldStyle;
  className = $trim(className);
  oldStyle = this$static.className;
  idx = oldStyle.indexOf(className);
  while (idx != -1) {
    if (idx == 0 || oldStyle.charCodeAt(idx - 1) == 32) {
      last = idx + className.length;
      lastPos = oldStyle.length;
      if (last == lastPos || last < lastPos && oldStyle.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = oldStyle.indexOf(className, idx + 1);
  }
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx - 0));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    this$static.className = newClassName;
  }
}

function is_0(o){
  if (!!o && !!o.nodeType) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function $clinit_64(){
  $clinit_64 = nullMethod;
  executeBackgroundImageCacheCommand();
}

function addTop(srcImgMap, img, src){
  img.src = src;
  if (img.complete) {
    return;
  }
  img.__kids = [];
  img.__pendingSrc = src;
  srcImgMap[src] = img;
  var _onload = img.onload, _onerror = img.onerror, _onabort = img.onabort;
  function finish(_originalHandler){
    var kids = img.__kids;
    img.__cleanup();
    window.setTimeout(function(){
      for (var i = 0; i < kids.length; ++i) {
        var kid = kids[i];
        if (kid.__pendingSrc == src) {
          kid.src = src;
          kid.__pendingSrc = null;
        }
      }
    }
    , 0);
    _originalHandler && _originalHandler.call(img);
  }

  img.onload = function(){
    finish(_onload);
  }
  ;
  img.onerror = function(){
    finish(_onerror);
  }
  ;
  img.onabort = function(){
    finish(_onabort);
  }
  ;
  img.__cleanup = function(){
    img.onload = _onload;
    img.onerror = _onerror;
    img.onabort = _onabort;
    img.__cleanup = img.__pendingSrc = img.__kids = null;
    delete srcImgMap[src];
  }
  ;
}

function executeBackgroundImageCacheCommand(){
  try {
    $doc.execCommand('BackgroundImageCache', false, true);
  }
   catch (e) {
  }
}

function getImgSrc(img){
  $clinit_64();
  return img.__pendingSrc || img.src;
}

function removeChild(parent_0, child){
  var kids = parent_0.__kids;
  for (var i = 0, c = kids.length; i < c; ++i) {
    if (kids[i] === child) {
      kids.splice(i, 1);
      child.__pendingSrc = null;
      return;
    }
  }
}

function removeTop(srcImgMap, img){
  var src = img.__pendingSrc;
  var kids = img.__kids;
  img.__cleanup();
  if (img = kids[0]) {
    img.__pendingSrc = null;
    addTop(srcImgMap, img, src);
    if (img.__pendingSrc) {
      kids.splice(0, 1);
      img.__kids = kids;
    }
     else {
      for (var i = 1, c = kids.length; i < c; ++i) {
        kids[i].src = src;
        kids[i].__pendingSrc = null;
      }
    }
  }
}

function setImgSrc(img, src){
  $clinit_64();
  var oldSrc, top_0;
  if ($equals_1(img.__pendingSrc || img.src, src)) {
    return;
  }
  !srcImgMap_0 && (srcImgMap_0 = {});
  oldSrc = img.__pendingSrc;
  if (oldSrc != null) {
    top_0 = srcImgMap_0[oldSrc];
    top_0 == img?removeTop(srcImgMap_0, top_0):removeChild(top_0, img);
  }
  top_0 = srcImgMap_0[src];
  !top_0?addTop(srcImgMap_0, img, src):(top_0.__kids.push(img) , img.__pendingSrc = top_0.__pendingSrc , undefined);
}

var srcImgMap_0 = null;
function equals_1(other){
  return this === (other == null?null:other);
}

function getClass_48(){
  return Ljava_lang_Enum_2_classLit;
}

function hashCode_2(){
  return this.$H || (this.$H = ++sNextHashId);
}

function toString_6(){
  return this.name_0;
}

function Enum(){
}

_ = Enum.prototype = new Object_0;
_.equals$ = equals_1;
_.getClass$ = getClass_48;
_.hashCode$ = hashCode_2;
_.toString$ = toString_6;
_.typeId$ = 36;
_.name_0 = null;
_.ordinal = 0;
function $clinit_70(){
  $clinit_70 = nullMethod;
  NONE = $Style$Display$1(new Style$Display$1, 'NONE', 0);
  BLOCK = $Style$Display$2(new Style$Display$2, 'BLOCK', 1);
  INLINE = $Style$Display$3(new Style$Display$3, 'INLINE', 2);
  INLINE_BLOCK = $Style$Display$4(new Style$Display$4, 'INLINE_BLOCK', 3);
}

function getClass_49(){
  return Lcom_google_gwt_dom_client_Style$Display_2_classLit;
}

function values_0(){
  $clinit_70();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Display_2_classLit, 217, 24, [NONE, BLOCK, INLINE, INLINE_BLOCK]);
}

function Style$Display(){
}

_ = Style$Display.prototype = new Enum;
_.getClass$ = getClass_49;
_.typeId$ = 37;
var BLOCK, INLINE, INLINE_BLOCK, NONE;
function $clinit_71(){
  $clinit_71 = nullMethod;
  $clinit_70();
}

function $Style$Display$1(this$static, enum$name, enum$ordinal){
  $clinit_71();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_50(){
  return Lcom_google_gwt_dom_client_Style$Display$1_2_classLit;
}

function Style$Display$1(){
}

_ = Style$Display$1.prototype = new Style$Display;
_.getClass$ = getClass_50;
_.typeId$ = 38;
function $clinit_72(){
  $clinit_72 = nullMethod;
  $clinit_70();
}

function $Style$Display$2(this$static, enum$name, enum$ordinal){
  $clinit_72();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_51(){
  return Lcom_google_gwt_dom_client_Style$Display$2_2_classLit;
}

function Style$Display$2(){
}

_ = Style$Display$2.prototype = new Style$Display;
_.getClass$ = getClass_51;
_.typeId$ = 39;
function $clinit_73(){
  $clinit_73 = nullMethod;
  $clinit_70();
}

function $Style$Display$3(this$static, enum$name, enum$ordinal){
  $clinit_73();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_52(){
  return Lcom_google_gwt_dom_client_Style$Display$3_2_classLit;
}

function Style$Display$3(){
}

_ = Style$Display$3.prototype = new Style$Display;
_.getClass$ = getClass_52;
_.typeId$ = 40;
function $clinit_74(){
  $clinit_74 = nullMethod;
  $clinit_70();
}

function $Style$Display$4(this$static, enum$name, enum$ordinal){
  $clinit_74();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_53(){
  return Lcom_google_gwt_dom_client_Style$Display$4_2_classLit;
}

function Style$Display$4(){
}

_ = Style$Display$4.prototype = new Style$Display;
_.getClass$ = getClass_53;
_.typeId$ = 41;
function $clinit_76(){
  $clinit_76 = nullMethod;
  STATIC = $Style$Position$1(new Style$Position$1, 'STATIC', 0);
  RELATIVE = $Style$Position$2(new Style$Position$2, 'RELATIVE', 1);
  ABSOLUTE = $Style$Position$3(new Style$Position$3, 'ABSOLUTE', 2);
  FIXED = $Style$Position$4(new Style$Position$4, 'FIXED', 3);
}

function getClass_54(){
  return Lcom_google_gwt_dom_client_Style$Position_2_classLit;
}

function values_1(){
  $clinit_76();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Position_2_classLit, 219, 26, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

function Style$Position(){
}

_ = Style$Position.prototype = new Enum;
_.getClass$ = getClass_54;
_.typeId$ = 42;
var ABSOLUTE, FIXED, RELATIVE, STATIC;
function $clinit_77(){
  $clinit_77 = nullMethod;
  $clinit_76();
}

function $Style$Position$1(this$static, enum$name, enum$ordinal){
  $clinit_77();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_55(){
  return Lcom_google_gwt_dom_client_Style$Position$1_2_classLit;
}

function Style$Position$1(){
}

_ = Style$Position$1.prototype = new Style$Position;
_.getClass$ = getClass_55;
_.typeId$ = 43;
function $clinit_78(){
  $clinit_78 = nullMethod;
  $clinit_76();
}

function $Style$Position$2(this$static, enum$name, enum$ordinal){
  $clinit_78();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_56(){
  return Lcom_google_gwt_dom_client_Style$Position$2_2_classLit;
}

function Style$Position$2(){
}

_ = Style$Position$2.prototype = new Style$Position;
_.getClass$ = getClass_56;
_.typeId$ = 44;
function $clinit_79(){
  $clinit_79 = nullMethod;
  $clinit_76();
}

function $Style$Position$3(this$static, enum$name, enum$ordinal){
  $clinit_79();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_57(){
  return Lcom_google_gwt_dom_client_Style$Position$3_2_classLit;
}

function Style$Position$3(){
}

_ = Style$Position$3.prototype = new Style$Position;
_.getClass$ = getClass_57;
_.typeId$ = 45;
function $clinit_80(){
  $clinit_80 = nullMethod;
  $clinit_76();
}

function $Style$Position$4(this$static, enum$name, enum$ordinal){
  $clinit_80();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_58(){
  return Lcom_google_gwt_dom_client_Style$Position$4_2_classLit;
}

function Style$Position$4(){
}

_ = Style$Position$4.prototype = new Style$Position;
_.getClass$ = getClass_58;
_.typeId$ = 46;
function $clinit_81(){
  $clinit_81 = nullMethod;
  PX = $Style$Unit$1(new Style$Unit$1, 'PX', 0);
  PCT = $Style$Unit$2(new Style$Unit$2, 'PCT', 1);
  EM = $Style$Unit$3(new Style$Unit$3, 'EM', 2);
  EX = $Style$Unit$4(new Style$Unit$4, 'EX', 3);
  PT = $Style$Unit$5(new Style$Unit$5, 'PT', 4);
  PC = $Style$Unit$6(new Style$Unit$6, 'PC', 5);
  IN = $Style$Unit$7(new Style$Unit$7, 'IN', 6);
  CM = $Style$Unit$8(new Style$Unit$8, 'CM', 7);
  MM = $Style$Unit$9(new Style$Unit$9, 'MM', 8);
}

function getClass_59(){
  return Lcom_google_gwt_dom_client_Style$Unit_2_classLit;
}

function values_2(){
  $clinit_81();
  return initValues(_3Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 220, 27, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

function Style$Unit(){
}

_ = Style$Unit.prototype = new Enum;
_.getClass$ = getClass_59;
_.typeId$ = 47;
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
function $clinit_82(){
  $clinit_82 = nullMethod;
  $clinit_81();
}

function $Style$Unit$1(this$static, enum$name, enum$ordinal){
  $clinit_82();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_60(){
  return Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit;
}

function Style$Unit$1(){
}

_ = Style$Unit$1.prototype = new Style$Unit;
_.getClass$ = getClass_60;
_.typeId$ = 48;
function $clinit_83(){
  $clinit_83 = nullMethod;
  $clinit_81();
}

function $Style$Unit$2(this$static, enum$name, enum$ordinal){
  $clinit_83();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_61(){
  return Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit;
}

function Style$Unit$2(){
}

_ = Style$Unit$2.prototype = new Style$Unit;
_.getClass$ = getClass_61;
_.typeId$ = 49;
function $clinit_84(){
  $clinit_84 = nullMethod;
  $clinit_81();
}

function $Style$Unit$3(this$static, enum$name, enum$ordinal){
  $clinit_84();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_62(){
  return Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit;
}

function Style$Unit$3(){
}

_ = Style$Unit$3.prototype = new Style$Unit;
_.getClass$ = getClass_62;
_.typeId$ = 50;
function $clinit_85(){
  $clinit_85 = nullMethod;
  $clinit_81();
}

function $Style$Unit$4(this$static, enum$name, enum$ordinal){
  $clinit_85();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_63(){
  return Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit;
}

function Style$Unit$4(){
}

_ = Style$Unit$4.prototype = new Style$Unit;
_.getClass$ = getClass_63;
_.typeId$ = 51;
function $clinit_86(){
  $clinit_86 = nullMethod;
  $clinit_81();
}

function $Style$Unit$5(this$static, enum$name, enum$ordinal){
  $clinit_86();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_64(){
  return Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit;
}

function Style$Unit$5(){
}

_ = Style$Unit$5.prototype = new Style$Unit;
_.getClass$ = getClass_64;
_.typeId$ = 52;
function $clinit_87(){
  $clinit_87 = nullMethod;
  $clinit_81();
}

function $Style$Unit$6(this$static, enum$name, enum$ordinal){
  $clinit_87();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_65(){
  return Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit;
}

function Style$Unit$6(){
}

_ = Style$Unit$6.prototype = new Style$Unit;
_.getClass$ = getClass_65;
_.typeId$ = 53;
function $clinit_88(){
  $clinit_88 = nullMethod;
  $clinit_81();
}

function $Style$Unit$7(this$static, enum$name, enum$ordinal){
  $clinit_88();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_66(){
  return Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit;
}

function Style$Unit$7(){
}

_ = Style$Unit$7.prototype = new Style$Unit;
_.getClass$ = getClass_66;
_.typeId$ = 54;
function $clinit_89(){
  $clinit_89 = nullMethod;
  $clinit_81();
}

function $Style$Unit$8(this$static, enum$name, enum$ordinal){
  $clinit_89();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_67(){
  return Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit;
}

function Style$Unit$8(){
}

_ = Style$Unit$8.prototype = new Style$Unit;
_.getClass$ = getClass_67;
_.typeId$ = 55;
function $clinit_90(){
  $clinit_90 = nullMethod;
  $clinit_81();
}

function $Style$Unit$9(this$static, enum$name, enum$ordinal){
  $clinit_90();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_68(){
  return Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit;
}

function Style$Unit$9(){
}

_ = Style$Unit$9.prototype = new Style$Unit;
_.getClass$ = getClass_68;
_.typeId$ = 56;
function $clinit_91(){
  $clinit_91 = nullMethod;
  TYPE_0 = $DomEvent$Type(new DomEvent$Type, 'blur', ($clinit_91() , new BlurEvent));
}

function dispatch_0(p0){
  $removeStyleDependentName(dynamicCast(p0, 6).this$0, 'focus');
}

function getAssociatedType_1(){
  return TYPE_0;
}

function getClass_69(){
  return Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit;
}

function BlurEvent(){
}

_ = BlurEvent.prototype = new DomEvent;
_.dispatch = dispatch_0;
_.getAssociatedType_0 = getAssociatedType_1;
_.getClass$ = getClass_69;
_.typeId$ = 0;
var TYPE_0;
function $clinit_93(){
  $clinit_93 = nullMethod;
  TYPE_1 = $DomEvent$Type(new DomEvent$Type, 'change', ($clinit_93() , new ChangeEvent));
}

function dispatch_1(p0){
  dynamicCast(p0, 7).onChange(this);
}

function getAssociatedType_2(){
  return TYPE_1;
}

function getClass_70(){
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent;
_.dispatch = dispatch_1;
_.getAssociatedType_0 = getAssociatedType_2;
_.getClass$ = getClass_70;
_.typeId$ = 0;
var TYPE_1;
function $GwtEvent$Type(this$static){
  this$static.index_0 = ++nextHashCode;
  return this$static;
}

function getClass_71(){
  return Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit;
}

function hashCode_3(){
  return this.index_0;
}

function toString_7(){
  return 'Event type';
}

function GwtEvent$Type(){
}

_ = GwtEvent$Type.prototype = new Object_0;
_.getClass$ = getClass_71;
_.hashCode$ = hashCode_3;
_.toString$ = toString_7;
_.typeId$ = 0;
_.index_0 = 0;
var nextHashCode = 0;
function $DomEvent$Type(this$static, eventName, flyweight){
  this$static.index_0 = ++nextHashCode;
  this$static.flyweight = flyweight;
  !registered && (registered = $PrivateMap(new PrivateMap));
  registered.map[eventName] = this$static;
  this$static.name_0 = eventName;
  return this$static;
}

function getClass_72(){
  return Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit;
}

function DomEvent$Type(){
}

_ = DomEvent$Type.prototype = new GwtEvent$Type;
_.getClass$ = getClass_72;
_.typeId$ = 57;
_.flyweight = null;
_.name_0 = null;
function $clinit_98(){
  $clinit_98 = nullMethod;
  TYPE_2 = $DomEvent$Type(new DomEvent$Type, 'error', ($clinit_98() , new ErrorEvent));
}

function $dispatch_1(this$static, handler){
  var img;
  $removeHandler(handler.this$0.loadHandler);
  $removeHandler(handler.this$0.errHandler);
  img = dynamicCast(this$static.source, 71);
  !!img && $removeFromParent(img);
}

function dispatch_2(p0){
  $dispatch_1(this, dynamicCast(p0, 10));
}

function getAssociatedType_3(){
  return TYPE_2;
}

function getClass_73(){
  return Lcom_google_gwt_event_dom_client_ErrorEvent_2_classLit;
}

function ErrorEvent(){
}

_ = ErrorEvent.prototype = new DomEvent;
_.dispatch = dispatch_2;
_.getAssociatedType_0 = getAssociatedType_3;
_.getClass$ = getClass_73;
_.typeId$ = 0;
var TYPE_2;
function $clinit_100(){
  $clinit_100 = nullMethod;
  TYPE_3 = $DomEvent$Type(new DomEvent$Type, 'focus', ($clinit_100() , new FocusEvent));
}

function dispatch_3(p0){
  $addStyleDependentName(dynamicCast(p0, 11).this$0, 'focus');
}

function getAssociatedType_4(){
  return TYPE_3;
}

function getClass_74(){
  return Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit;
}

function FocusEvent(){
}

_ = FocusEvent.prototype = new DomEvent;
_.dispatch = dispatch_3;
_.getAssociatedType_0 = getAssociatedType_4;
_.getClass$ = getClass_74;
_.typeId$ = 0;
var TYPE_3;
function getClass_75(){
  return Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit;
}

function KeyEvent(){
}

_ = KeyEvent.prototype = new DomEvent;
_.getClass$ = getClass_75;
_.typeId$ = 0;
function $clinit_122(){
  $clinit_122 = nullMethod;
  TYPE_4 = $DomEvent$Type(new DomEvent$Type, 'keypress', ($clinit_122() , new KeyPressEvent));
}

function $dispatch_2(this$static, handler){
  $getCharCode(this$static.nativeEvent) == 13 && $fireEvent(handler.this$0, ($clinit_24() , $clinit_23() , new GWTCButton$7));
}

function $getCharCode(e){
  return e.charCode || e.keyCode;
}

function dispatch_4(p0){
  $dispatch_2(this, dynamicCast(p0, 12));
}

function getAssociatedType_5(){
  return TYPE_4;
}

function getClass_76(){
  return Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit;
}

function KeyPressEvent(){
}

_ = KeyPressEvent.prototype = new KeyEvent;
_.dispatch = dispatch_4;
_.getAssociatedType_0 = getAssociatedType_5;
_.getClass$ = getClass_76;
_.typeId$ = 0;
var TYPE_4;
function $clinit_124(){
  $clinit_124 = nullMethod;
  TYPE_5 = $DomEvent$Type(new DomEvent$Type, 'load', ($clinit_124() , new LoadEvent));
}

function dispatch_5(p0){
  $onLoad_0(dynamicCast(p0, 13), this);
}

function getAssociatedType_6(){
  return TYPE_5;
}

function getClass_77(){
  return Lcom_google_gwt_event_dom_client_LoadEvent_2_classLit;
}

function LoadEvent(){
}

_ = LoadEvent.prototype = new DomEvent;
_.dispatch = dispatch_5;
_.getAssociatedType_0 = getAssociatedType_6;
_.getClass$ = getClass_77;
_.typeId$ = 0;
var TYPE_5;
function $getX(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (($clinit_56() , e).clientX || 0) - $getAbsoluteLeft(relativeElem) + $getScrollLeft_1(relativeElem) + $getScrollLeft(relativeElem.ownerDocument);
  }
  return ($clinit_56() , this$static.nativeEvent).clientX || 0;
}

function $getY(this$static){
  var relativeElem, e;
  relativeElem = this$static.relativeElem;
  if (relativeElem) {
    return e = this$static.nativeEvent , (($clinit_56() , e).clientY || 0) - $getAbsoluteTop(relativeElem) + (relativeElem.scrollTop || 0) + $getScrollTop(relativeElem.ownerDocument);
  }
  return ($clinit_56() , this$static.nativeEvent).clientY || 0;
}

function getClass_78(){
  return Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit;
}

function MouseEvent(){
}

_ = MouseEvent.prototype = new DomEvent;
_.getClass$ = getClass_78;
_.typeId$ = 0;
function $clinit_127(){
  $clinit_127 = nullMethod;
  TYPE_6 = $DomEvent$Type(new DomEvent$Type, 'mousedown', ($clinit_127() , new MouseDownEvent));
}

function dispatch_6(p0){
  dynamicCast(p0, 14).onMouseDown(this);
}

function getAssociatedType_7(){
  return TYPE_6;
}

function getClass_79(){
  return Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit;
}

function MouseDownEvent(){
}

_ = MouseDownEvent.prototype = new MouseEvent;
_.dispatch = dispatch_6;
_.getAssociatedType_0 = getAssociatedType_7;
_.getClass$ = getClass_79;
_.typeId$ = 0;
var TYPE_6;
function $clinit_129(){
  $clinit_129 = nullMethod;
  TYPE_7 = $DomEvent$Type(new DomEvent$Type, 'mousemove', ($clinit_129() , new MouseMoveEvent));
}

function dispatch_7(p0){
  $onMouseMove(dynamicCast(p0, 15).this$0, $getX(this), $getY(this));
}

function getAssociatedType_8(){
  return TYPE_7;
}

function getClass_80(){
  return Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit;
}

function MouseMoveEvent(){
}

_ = MouseMoveEvent.prototype = new MouseEvent;
_.dispatch = dispatch_7;
_.getAssociatedType_0 = getAssociatedType_8;
_.getClass$ = getClass_80;
_.typeId$ = 0;
var TYPE_7;
function $clinit_131(){
  $clinit_131 = nullMethod;
  TYPE_8 = $DomEvent$Type(new DomEvent$Type, 'mouseout', ($clinit_131() , new MouseOutEvent));
}

function dispatch_8(p0){
  dynamicCast(p0, 16).onMouseOut(this);
}

function getAssociatedType_9(){
  return TYPE_8;
}

function getClass_81(){
  return Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit;
}

function MouseOutEvent(){
}

_ = MouseOutEvent.prototype = new MouseEvent;
_.dispatch = dispatch_8;
_.getAssociatedType_0 = getAssociatedType_9;
_.getClass$ = getClass_81;
_.typeId$ = 0;
var TYPE_8;
function $clinit_133(){
  $clinit_133 = nullMethod;
  TYPE_9 = $DomEvent$Type(new DomEvent$Type, 'mouseover', ($clinit_133() , new MouseOverEvent));
}

function dispatch_9(p0){
  dynamicCast(p0, 17).onMouseOver(this);
}

function getAssociatedType_10(){
  return TYPE_9;
}

function getClass_82(){
  return Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit;
}

function MouseOverEvent(){
}

_ = MouseOverEvent.prototype = new MouseEvent;
_.dispatch = dispatch_9;
_.getAssociatedType_0 = getAssociatedType_10;
_.getClass$ = getClass_82;
_.typeId$ = 0;
var TYPE_9;
function $clinit_135(){
  $clinit_135 = nullMethod;
  TYPE_10 = $DomEvent$Type(new DomEvent$Type, 'mouseup', ($clinit_135() , new MouseUpEvent));
}

function dispatch_10(p0){
  $onMouseUp(dynamicCast(p0, 15).this$0, ($getX(this) , $getY(this)));
}

function getAssociatedType_11(){
  return TYPE_10;
}

function getClass_83(){
  return Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit;
}

function MouseUpEvent(){
}

_ = MouseUpEvent.prototype = new MouseEvent;
_.dispatch = dispatch_10;
_.getAssociatedType_0 = getAssociatedType_11;
_.getClass$ = getClass_83;
_.typeId$ = 0;
var TYPE_10;
function $PrivateMap(this$static){
  this$static.map = {};
  return this$static;
}

function getClass_84(){
  return Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit;
}

function PrivateMap(){
}

_ = PrivateMap.prototype = new Object_0;
_.getClass$ = getClass_84;
_.typeId$ = 0;
_.map = null;
function dispatch_11(p0){
  dynamicCast(p0, 18).onClose(this);
}

function fire_0(source){
  var event_0;
  if (TYPE_11) {
    event_0 = new CloseEvent;
    source.fireEvent_0(event_0);
  }
}

function getAssociatedType_12(){
  return TYPE_11;
}

function getClass_85(){
  return Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit;
}

function CloseEvent(){
}

_ = CloseEvent.prototype = new GwtEvent;
_.dispatch = dispatch_11;
_.getAssociatedType = getAssociatedType_12;
_.getClass$ = getClass_85;
_.typeId$ = 0;
var TYPE_11 = null;
function $ResizeEvent(this$static, width){
  this$static.width_0 = width;
  return this$static;
}

function dispatch_12(p0){
  dynamicCast(p0, 19).onResize(this);
}

function fire_1(source, width){
  var event_0;
  if (TYPE_12) {
    event_0 = $ResizeEvent(new ResizeEvent, width);
    $fireEvent_0(source, event_0);
  }
}

function getAssociatedType_13(){
  return TYPE_12;
}

function getClass_86(){
  return Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit;
}

function ResizeEvent(){
}

_ = ResizeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_12;
_.getAssociatedType = getAssociatedType_13;
_.getClass$ = getClass_86;
_.typeId$ = 0;
_.width_0 = 0;
var TYPE_12 = null;
function dispatch_13(p0){
  $onValueChange(dynamicCast(p0, 20));
}

function fire_2(source){
  var event_0;
  if (TYPE_13) {
    event_0 = new ValueChangeEvent;
    $fireEvent_0(source.handlers, event_0);
  }
}

function getAssociatedType_14(){
  return TYPE_13;
}

function getClass_87(){
  return Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit;
}

function ValueChangeEvent(){
}

_ = ValueChangeEvent.prototype = new GwtEvent;
_.dispatch = dispatch_13;
_.getAssociatedType = getAssociatedType_14;
_.getClass$ = getClass_87;
_.typeId$ = 0;
var TYPE_13 = null;
function $DefaultHandlerRegistration(this$static, manager, type, handler){
  this$static.manager = manager;
  this$static.handler = handler;
  this$static.type_0 = type;
  return this$static;
}

function $removeHandler(this$static){
  $removeHandler_0(this$static.manager, this$static.type_0, this$static.handler);
}

function getClass_88(){
  return Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit;
}

function removeHandler(){
  $removeHandler_0(this.manager, this.type_0, this.handler);
}

function DefaultHandlerRegistration(){
}

_ = DefaultHandlerRegistration.prototype = new Object_0;
_.getClass$ = getClass_88;
_.removeHandler = removeHandler;
_.typeId$ = 58;
_.handler = null;
_.manager = null;
_.type_0 = null;
function $HandlerManager(this$static, source){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = false;
  return this$static;
}

function $HandlerManager_0(this$static, source, fireInReverseOrder){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = source;
  this$static.isReverseOrder = fireInReverseOrder;
  return this$static;
}

function $addHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$1(new HandlerManager$1, this$static, type, handler)):$addHandler_1(this$static.registry, type, handler);
  return $DefaultHandlerRegistration(new DefaultHandlerRegistration, this$static, type, handler);
}

function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = $ArrayList(new ArrayList));
  $add_13(this$static.deferredDeltas, command);
}

function $fireEvent_0(this$static, event_0){
  var oldSource;
  event_0.dead && event_0.revive();
  oldSource = event_0.source;
  event_0.source = this$static.source;
  try {
    ++this$static.firingDepth;
    $fireEvent_1(this$static.registry, event_0, this$static.isReverseOrder);
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
  if (oldSource == null) {
    event_0.dead = true;
    event_0.source = null;
  }
   else {
    event_0.source = oldSource;
  }
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.deferredDeltas); c$iterator.i < c$iterator.this$0.size_0();) {
        c = dynamicCast($next_5(c$iterator), 21);
        c.execute_0();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $removeHandler_0(this$static, type, handler){
  this$static.firingDepth > 0?$defer(this$static, $HandlerManager$2(new HandlerManager$2, this$static, type, handler)):$removeHandler_1(this$static.registry, type, handler);
}

function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}

function getClass_89(){
  return Lcom_google_gwt_event_shared_HandlerManager_2_classLit;
}

function HandlerManager(){
}

_ = HandlerManager.prototype = new Object_0;
_.fireEvent_0 = fireEvent_0;
_.getClass$ = getClass_89;
_.typeId$ = 0;
_.deferredDeltas = null;
_.firingDepth = 0;
_.isReverseOrder = false;
_.registry = null;
_.source = null;
function $HandlerManager$1(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_2(){
  $addHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_90(){
  return Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit;
}

function HandlerManager$1(){
}

_ = HandlerManager$1.prototype = new Object_0;
_.execute_0 = execute_2;
_.getClass$ = getClass_90;
_.typeId$ = 59;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$2(this$static, this$0, val$type, val$handler){
  this$static.this$0 = this$0;
  this$static.val$type = val$type;
  this$static.val$handler = val$handler;
  return this$static;
}

function execute_3(){
  $removeHandler_1(this.this$0.registry, this.val$type, this.val$handler);
}

function getClass_91(){
  return Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit;
}

function HandlerManager$2(){
}

_ = HandlerManager$2.prototype = new Object_0;
_.execute_0 = execute_3;
_.getClass$ = getClass_91;
_.typeId$ = 60;
_.this$0 = null;
_.val$handler = null;
_.val$type = null;
function $HandlerManager$HandlerRegistry(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $addHandler_1(this$static, type, handler){
  var l;
  l = dynamicCast($get_2(this$static.map, type), 22);
  if (!l) {
    l = $ArrayList(new ArrayList);
    $put_0(this$static.map, type, l);
  }
  setCheck(l.array, l.size++, handler);
}

function $fireEvent_1(this$static, event_0, isReverseOrder){
  var count, handler, i, type, l, l_0, l_1;
  type = event_0.getAssociatedType();
  count = (l = dynamicCast($get_2(this$static.map, type), 22) , !l?0:l.size);
  if (isReverseOrder) {
    for (i = count - 1; i >= 0; --i) {
      handler = (l_0 = dynamicCast($get_2(this$static.map, type), 22) , dynamicCast((checkIndex(i, l_0.size) , l_0.array[i]), 47));
      event_0.dispatch(handler);
    }
  }
   else {
    for (i = 0; i < count; ++i) {
      handler = (l_1 = dynamicCast($get_2(this$static.map, type), 22) , dynamicCast((checkIndex(i, l_1.size) , l_1.array[i]), 47));
      event_0.dispatch(handler);
    }
  }
}

function $removeHandler_1(this$static, eventKey, handler){
  var l, result;
  l = dynamicCast($get_2(this$static.map, eventKey), 22);
  result = !!l && $remove_15(l, handler);
  result && l.size == 0 && $remove_11(this$static.map, eventKey);
}

function getClass_92(){
  return Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit;
}

function HandlerManager$HandlerRegistry(){
}

_ = HandlerManager$HandlerRegistry.prototype = new Object_0;
_.getClass$ = getClass_92;
_.typeId$ = 0;
function $Request(this$static, xmlHttpRequest, timeoutMillis, callback){
  if (!xmlHttpRequest) {
    throw $NullPointerException(new NullPointerException);
  }
  if (!callback) {
    throw $NullPointerException(new NullPointerException);
  }
  if (timeoutMillis < 0) {
    throw $IllegalArgumentException(new IllegalArgumentException);
  }
  this$static.timeoutMillis = timeoutMillis;
  this$static.xmlHttpRequest = xmlHttpRequest;
  if (timeoutMillis > 0) {
    this$static.timer = $Request$3(new Request$3, this$static, callback);
    $schedule(this$static.timer, timeoutMillis);
  }
   else {
    this$static.timer = null;
  }
  return this$static;
}

function $cancel_1(this$static){
  var xmlHttp;
  if (this$static.xmlHttpRequest) {
    xmlHttp = this$static.xmlHttpRequest;
    this$static.xmlHttpRequest = null;
    $clearOnReadyStateChange(xmlHttp);
    xmlHttp.abort();
    !!this$static.timer && $cancel_0(this$static.timer);
  }
}

function $fireOnResponseReceived(this$static, callback){
  var errorMsg, exception, response, xhr;
  if (!this$static.xmlHttpRequest) {
    return;
  }
  !!this$static.timer && $cancel_0(this$static.timer);
  xhr = this$static.xmlHttpRequest;
  this$static.xmlHttpRequest = null;
  errorMsg = $getBrowserSpecificFailure(xhr);
  if (errorMsg != null) {
    exception = $RuntimeException(new RuntimeException, errorMsg);
    callback.onError(this$static, exception);
  }
   else {
    response = $Request$1(new Request$1, xhr);
    callback.onResponseReceived(this$static, response);
  }
}

function $fireOnTimeout(this$static, callback){
  if (!this$static.xmlHttpRequest) {
    return;
  }
  $cancel_1(this$static);
  callback.onError(this$static, $RequestTimeoutException(new RequestTimeoutException, this$static.timeoutMillis));
}

function $getBrowserSpecificFailure(xhr){
  try {
    if (xhr.status === undefined) {
      return 'XmlHttpRequest.status == undefined, please see Safari bug http://bugs.webkit.org/show_bug.cgi?id=3810 for more details';
    }
    return null;
  }
   catch (e) {
    return 'Unable to read XmlHttpRequest.status; likely causes are a networking error or bad cross-domain request. Please see https://bugzilla.mozilla.org/show_bug.cgi?id=238559 for more details';
  }
}

function getClass_93(){
  return Lcom_google_gwt_http_client_Request_2_classLit;
}

function Request(){
}

_ = Request.prototype = new Object_0;
_.getClass$ = getClass_93;
_.typeId$ = 0;
_.timeoutMillis = 0;
_.timer = null;
_.xmlHttpRequest = null;
function getClass_94(){
  return Lcom_google_gwt_http_client_Response_2_classLit;
}

function Response(){
}

_ = Response.prototype = new Object_0;
_.getClass$ = getClass_94;
_.typeId$ = 0;
function $Request$1(this$static, val$xmlHttpRequest){
  this$static.val$xmlHttpRequest = val$xmlHttpRequest;
  return this$static;
}

function getClass_95(){
  return Lcom_google_gwt_http_client_Request$1_2_classLit;
}

function Request$1(){
}

_ = Request$1.prototype = new Response;
_.getClass$ = getClass_95;
_.typeId$ = 0;
_.val$xmlHttpRequest = null;
function $clinit_160(){
  $clinit_160 = nullMethod;
  $clinit_34();
}

function $Request$3(this$static, this$0, val$callback){
  $clinit_160();
  this$static.this$0 = this$0;
  this$static.val$callback = val$callback;
  return this$static;
}

function getClass_96(){
  return Lcom_google_gwt_http_client_Request$3_2_classLit;
}

function run_0(){
  $fireOnTimeout(this.this$0, this.val$callback);
}

function Request$3(){
}

_ = Request$3.prototype = new Timer;
_.getClass$ = getClass_96;
_.run = run_0;
_.typeId$ = 61;
_.this$0 = null;
_.val$callback = null;
function $clinit_161(){
  $clinit_161 = nullMethod;
  $RequestBuilder$Method(new RequestBuilder$Method, 'DELETE');
  GET = $RequestBuilder$Method(new RequestBuilder$Method, 'GET');
  $RequestBuilder$Method(new RequestBuilder$Method, 'HEAD');
  $RequestBuilder$Method(new RequestBuilder$Method, 'POST');
  $RequestBuilder$Method(new RequestBuilder$Method, 'PUT');
}

function $RequestBuilder(this$static, httpMethod, url){
  $clinit_161();
  $RequestBuilder_0(this$static, !httpMethod?null:httpMethod.name_0, url);
  return this$static;
}

function $RequestBuilder_0(this$static, httpMethod, url){
  $clinit_161();
  throwIfEmptyOrNull('httpMethod', httpMethod);
  throwIfEmptyOrNull('url', url);
  this$static.httpMethod = httpMethod;
  this$static.url = url;
  return this$static;
}

function $doSend(this$static, requestData, callback){
  var $e0, e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = create_0();
  try {
    xmlHttpRequest.open(this$static.httpMethod, this$static.url, true);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 48)) {
      e = $e0;
      requestPermissionException = $RequestPermissionException(new RequestPermissionException, this$static.url);
      $initCause(requestPermissionException, $RequestException(new RequestException, e.getMessage()));
      throw requestPermissionException;
    }
     else 
      throw $e0;
  }
  xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  request = $Request(new Request, xmlHttpRequest, this$static.timeoutMillis, callback);
  $setOnReadyStateChange(xmlHttpRequest, $RequestBuilder$1(new RequestBuilder$1, request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 48)) {
      e = $e0;
      throw $RequestException(new RequestException, e.getMessage());
    }
     else 
      throw $e0;
  }
  return request;
}

function $sendRequest(this$static, requestData, callback){
  throwIfNull('callback', callback);
  return $doSend(this$static, requestData, callback);
}

function $setTimeoutMillis(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, 'Timeouts cannot be negative');
  }
  this$static.timeoutMillis = timeoutMillis;
}

function getClass_97(){
  return Lcom_google_gwt_http_client_RequestBuilder_2_classLit;
}

function RequestBuilder(){
}

_ = RequestBuilder.prototype = new Object_0;
_.getClass$ = getClass_97;
_.typeId$ = 0;
_.httpMethod = null;
_.timeoutMillis = 0;
_.url = null;
var GET;
function $RequestBuilder$1(this$static, val$request, val$callback){
  this$static.val$request = val$request;
  this$static.val$callback = val$callback;
  return this$static;
}

function getClass_98(){
  return Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit;
}

function onReadyStateChange(xhr){
  if (xhr.readyState == 4) {
    $clearOnReadyStateChange(xhr);
    $fireOnResponseReceived(this.val$request, this.val$callback);
  }
}

function RequestBuilder$1(){
}

_ = RequestBuilder$1.prototype = new Object_0;
_.getClass$ = getClass_98;
_.onReadyStateChange = onReadyStateChange;
_.typeId$ = 0;
_.val$callback = null;
_.val$request = null;
function $RequestBuilder$Method(this$static, name_0){
  this$static.name_0 = name_0;
  return this$static;
}

function getClass_99(){
  return Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit;
}

function toString_8(){
  return this.name_0;
}

function RequestBuilder$Method(){
}

_ = RequestBuilder$Method.prototype = new Object_0;
_.getClass$ = getClass_99;
_.toString$ = toString_8;
_.typeId$ = 0;
_.name_0 = null;
function $RequestException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_100(){
  return Lcom_google_gwt_http_client_RequestException_2_classLit;
}

function RequestException(){
}

_ = RequestException.prototype = new Exception;
_.getClass$ = getClass_100;
_.typeId$ = 62;
function $RequestPermissionException(this$static, url){
  $fillInStackTrace();
  this$static.detailMessage = 'The URL ' + url + ' is invalid or violates the same-origin security restriction';
  return this$static;
}

function getClass_101(){
  return Lcom_google_gwt_http_client_RequestPermissionException_2_classLit;
}

function RequestPermissionException(){
}

_ = RequestPermissionException.prototype = new RequestException;
_.getClass$ = getClass_101;
_.typeId$ = 63;
function $RequestTimeoutException(this$static, timeoutMillis){
  $fillInStackTrace();
  this$static.detailMessage = 'A request timeout has expired after ' + timeoutMillis + ' ms';
  return this$static;
}

function getClass_102(){
  return Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit;
}

function RequestTimeoutException(){
}

_ = RequestTimeoutException.prototype = new RequestException;
_.getClass$ = getClass_102;
_.typeId$ = 64;
function throwIfEmptyOrNull(name_0, value){
  throwIfNull(name_0, value);
  if (0 == $trim(value).length) {
    throw $IllegalArgumentException_0(new IllegalArgumentException, name_0 + ' cannot be empty');
  }
}

function throwIfNull(name_0, value){
  if (null == value) {
    throw $NullPointerException_0(new NullPointerException, name_0 + ' cannot be null');
  }
}

function createFrom(array, length_0){
  var a, result;
  a = array;
  result = createFromSeed(0, length_0);
  initValues(a.arrayClass$, a.typeId$, a.queryId$, result);
  return result;
}

function createFromSeed(seedType, length_0){
  var array = new Array(length_0);
  if (seedType > 0) {
    var value = [null, 0, false, [0, 0]][seedType];
    for (var i = 0; i < length_0; ++i) {
      array[i] = value;
    }
  }
  return array;
}

function getClass_103(){
  return this.arrayClass$;
}

function initDim(arrayClass, typeId, queryId, length_0, seedType){
  var result;
  result = createFromSeed(seedType, length_0);
  $clinit_176();
  wrapArray(result, expandoNames_0, expandoValues_0);
  result.arrayClass$ = arrayClass;
  result.typeId$ = typeId;
  result.queryId$ = queryId;
  return result;
}

function initValues(arrayClass, typeId, queryId, array){
  $clinit_176();
  wrapArray(array, expandoNames_0, expandoValues_0);
  array.arrayClass$ = arrayClass;
  array.typeId$ = typeId;
  array.queryId$ = queryId;
  return array;
}

function setCheck(array, index, value){
  if (value != null) {
    if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
    if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
      throw $ArrayStoreException(new ArrayStoreException);
    }
  }
  return array[index] = value;
}

function Array_0(){
}

_ = Array_0.prototype = new Object_0;
_.getClass$ = getClass_103;
_.typeId$ = 0;
_.arrayClass$ = null;
_.length = 0;
_.queryId$ = 0;
function $clinit_176(){
  $clinit_176 = nullMethod;
  expandoNames_0 = [];
  expandoValues_0 = [];
  initExpandos(new Array_0, expandoNames_0, expandoValues_0);
}

function initExpandos(protoType, expandoNames, expandoValues){
  var i = 0, value;
  for (var name_0 in protoType) {
    if (value = protoType[name_0]) {
      expandoNames[i] = name_0;
      expandoValues[i] = value;
      ++i;
    }
  }
}

function wrapArray(array, expandoNames, expandoValues){
  $clinit_176();
  for (var i = 0, c = expandoNames.length; i < c; ++i) {
    array[expandoNames[i]] = expandoValues[i];
  }
}

var expandoNames_0, expandoValues_0;
function canCast(srcId, dstId){
  return srcId && !!typeIdArray[srcId][dstId];
}

function canCastUnsafe(srcId, dstId){
  return srcId && typeIdArray[srcId][dstId];
}

function dynamicCast(src, dstId){
  if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function dynamicCastJso(src){
  if (src != null && (src.typeMarker$ == nullMethod || src.typeId$ == 2)) {
    throw $ClassCastException(new ClassCastException);
  }
  return src;
}

function instanceOf(src, dstId){
  return src != null && canCast(src.typeId$, dstId);
}

function instanceOfJso(src){
  return src != null && src.typeMarker$ != nullMethod && src.typeId$ != 2;
}

function round_int(x){
  return ~~Math.max(Math.min(x, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw $ClassCastException(new ClassCastException);
  }
  return o;
}

var typeIdArray = [{}, {}, {1:1, 38:1, 39:1, 40:1}, {32:1}, {28:1, 29:1, 32:1, 33:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 69:1}, {8:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {17:1, 47:1}, {16:1, 47:1}, {14:1, 47:1}, {11:1, 47:1}, {6:1, 47:1}, {12:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 66:1, 67:1, 69:1}, {8:1, 47:1}, {28:1, 29:1, 32:1, 33:1}, {28:1, 29:1, 32:1, 33:1}, {23:1}, {51:1}, {51:1}, {38:1, 45:1}, {2:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1, 48:1}, {38:1, 40:1, 41:1}, {24:1, 25:1, 38:1, 40:1, 41:1}, {24:1, 25:1, 38:1, 40:1, 41:1}, {24:1, 25:1, 38:1, 40:1, 41:1}, {24:1, 25:1, 38:1, 40:1, 41:1}, {24:1, 25:1, 38:1, 40:1, 41:1}, {25:1, 26:1, 38:1, 40:1, 41:1}, {25:1, 26:1, 38:1, 40:1, 41:1}, {25:1, 26:1, 38:1, 40:1, 41:1}, {25:1, 26:1, 38:1, 40:1, 41:1}, {25:1, 26:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {27:1, 38:1, 40:1, 41:1}, {9:1}, {68:1}, {21:1}, {21:1}, {51:1}, {2:1, 38:1, 45:1, 72:1}, {2:1, 38:1, 45:1, 72:1}, {2:1, 38:1, 45:1, 72:1, 78:1}, {2:1, 5:1, 38:1, 45:1}, {51:1}, {51:1}, {18:1, 47:1}, {28:1}, {28:1}, {28:1}, {49:1}, {49:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {2:1, 5:1, 38:1, 45:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 65:1}, {19:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 65:1, 66:1, 67:1, 69:1}, {14:1, 15:1, 16:1, 17:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {30:1}, {28:1, 29:1, 32:1, 33:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {49:1}, {3:1, 28:1, 29:1, 32:1, 33:1, 58:1, 69:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1, 69:1, 71:1}, {19:1, 47:1}, {47:1, 50:1}, {20:1, 47:1}, {31:1, 38:1, 40:1, 41:1}, {23:1}, {49:1}, {28:1, 29:1, 32:1, 33:1, 57:1, 58:1}, {18:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 57:1, 58:1}, {28:1, 29:1, 32:1, 33:1, 59:1}, {51:1}, {19:1, 47:1}, {60:1}, {2:1, 5:1, 38:1, 45:1}, {61:1}, {61:1}, {61:1}, {61:1}, {61:1}, {61:1}, {61:1}, {2:1, 5:1, 38:1, 45:1, 77:1}, {61:1}, {61:1, 62:1}, {61:1}, {61:1}, {61:1}, {8:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 63:1, 64:1}, {28:1, 29:1, 32:1, 33:1, 65:1}, {17:1, 47:1}, {16:1, 47:1}, {8:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1}, {28:1, 29:1, 32:1, 33:1, 65:1}, {28:1, 29:1, 32:1, 33:1, 65:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1}, {34:1, 35:1, 38:1, 40:1, 41:1}, {34:1, 35:1, 38:1, 40:1, 41:1}, {34:1, 35:1, 38:1, 40:1, 41:1}, {34:1, 35:1, 38:1, 40:1, 41:1}, {34:1, 35:1, 38:1, 40:1, 41:1}, {28:1, 29:1, 32:1, 33:1, 65:1}, {7:1, 47:1}, {36:1, 38:1, 40:1, 41:1}, {37:1, 38:1, 40:1, 41:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 70:1, 85:1}, {47:1, 76:1}, {68:1}, {68:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1, 69:1, 71:1}, {10:1, 47:1}, {13:1, 47:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 70:1}, {28:1, 29:1, 32:1, 33:1, 58:1, 70:1}, {8:1, 47:1}, {51:1}, {51:1}, {51:1}, {47:1, 56:1}, {51:1}, {47:1}, {47:1}, {68:1}, {68:1}, {68:1}, {68:1}, {47:1}, {7:1, 47:1}, {47:1, 55:1}, {28:1, 29:1, 32:1, 33:1, 58:1}, {2:1, 5:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {38:1, 45:1}, {38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {38:1, 43:1}, {2:1, 5:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {38:1, 40:1, 42:1, 43:1}, {2:1, 5:1, 38:1, 45:1}, {2:1, 5:1, 38:1, 45:1}, {38:1, 44:1}, {39:1}, {2:1, 5:1, 38:1, 45:1}, {79:1}, {79:1}, {81:1}, {81:1}, {53:1}, {53:1}, {53:1}, {52:1}, {81:1}, {22:1, 38:1, 52:1, 82:1}, {52:1}, {79:1}, {81:1}, {81:1}, {53:1}, {52:1, 82:1}, {38:1, 40:1, 83:1}, {81:1}, {81:1}, {38:1, 79:1, 80:1}, {38:1, 81:1}, {53:1}, {2:1, 5:1, 38:1, 45:1}, {38:1, 52:1, 82:1}, {51:1}, {47:1}, {47:1, 73:1}, {47:1, 74:1}, {47:1}, {47:1, 75:1}, {47:1, 76:1}, {28:1, 29:1, 32:1, 33:1, 66:1, 67:1, 69:1, 71:1}, {38:1}, {4:1, 38:1}, {38:1, 84:1}, {38:1}, {38:1, 84:1}, {38:1, 84:1}, {38:1}, {38:1}, {38:1}, {38:1, 84:1}, {38:1}, {38:1}, {38:1, 46:1}, {38:1, 84:1}, {38:1}, {38:1, 84:1}, {38:1, 84:1}, {38:1}, {38:1}, {38:1}, {38:1, 84:1}, {38:1}, {38:1}, {38:1}, {38:1}, {38:1}, {38:1, 54:1}, {38:1}];
function init(){
  !!$stats && $stats({moduleName:$moduleName, sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'onModuleLoadStart', className:'jsupload.client.JsUpload'});
  $export0_0();
  $export0();
  $schedule(($clinit_500() , $clinit_34() , new JsUpload$1), 1500);
}

function caught_0(e){
  if (e != null && canCast(e.typeId$, 45)) {
    return e;
  }
  return $JavaScriptException(new JavaScriptException, e);
}

function add_4(a, b){
  var newHigh, newLow;
  newHigh = a[1] + b[1];
  newLow = a[0] + b[0];
  return create(newLow, newHigh);
}

function addTimes(accum, a, b){
  if (a == 0) {
    return accum;
  }
  if (b == 0) {
    return accum;
  }
  return add_4(accum, create(a * b, 0));
}

function compare_0(a, b){
  var nega, negb;
  if (a[0] == b[0] && a[1] == b[1]) {
    return 0;
  }
  nega = a[1] < 0;
  negb = b[1] < 0;
  if (nega && !negb) {
    return -1;
  }
  if (!nega && negb) {
    return 1;
  }
  if (sub(a, b)[1] < 0) {
    return -1;
  }
   else {
    return 1;
  }
}

function create(valueLow, valueHigh){
  var diffHigh, diffLow;
  valueHigh %= 1.8446744073709552E19;
  valueLow %= 1.8446744073709552E19;
  diffHigh = valueHigh % 4294967296;
  diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
  valueHigh = valueHigh - diffHigh + diffLow;
  valueLow = valueLow - diffLow + diffHigh;
  while (valueLow < 0) {
    valueLow += 4294967296;
    valueHigh -= 4294967296;
  }
  while (valueLow > 4294967295) {
    valueLow -= 4294967296;
    valueHigh += 4294967296;
  }
  valueHigh = valueHigh % 1.8446744073709552E19;
  while (valueHigh > 9223372032559808512) {
    valueHigh -= 1.8446744073709552E19;
  }
  while (valueHigh < -9223372036854775808) {
    valueHigh += 1.8446744073709552E19;
  }
  return [valueLow, valueHigh];
}

function div_0(a, b){
  var approx, deltaRem, deltaResult, halfa, rem, result;
  if (b[0] == 0 && b[1] == 0) {
    throw $ArithmeticException(new ArithmeticException, '/ by zero');
  }
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_183() , ZERO;
  }
  if (eq(a, ($clinit_183() , MIN_VALUE))) {
    if (eq(b, ONE) || eq(b, NEG_ONE)) {
      return MIN_VALUE;
    }
    halfa = shr(a, 1);
    approx = shl(div_0(halfa, b), 1);
    rem = sub(a, mul(b, approx));
    return add_4(approx, div_0(rem, b));
  }
  if (eq(b, MIN_VALUE)) {
    return ZERO;
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return div_0(neg(a), neg(b));
    }
     else {
      return neg(div_0(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(div_0(a, neg(b)));
  }
  result = ZERO;
  rem = a;
  while (compare_0(rem, b) >= 0) {
    deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
    deltaResult[0] == 0 && deltaResult[1] == 0 && (deltaResult = ONE);
    deltaRem = mul(deltaResult, b);
    result = add_4(result, deltaResult);
    rem = sub(rem, deltaRem);
  }
  return result;
}

function eq(a, b){
  return a[0] == b[0] && a[1] == b[1];
}

function fromDouble(value){
  if (isNaN(value)) {
    return $clinit_183() , ZERO;
  }
  if (value < -9223372036854775808) {
    return $clinit_183() , MIN_VALUE;
  }
  if (value >= 9223372036854775807) {
    return $clinit_183() , MAX_VALUE;
  }
  if (value > 0) {
    return create(Math.floor(value), 0);
  }
   else {
    return create(Math.ceil(value), 0);
  }
}

function fromInt(value){
  var rebase, result;
  if (value > -129 && value < 128) {
    rebase = value + 128;
    result = ($clinit_182() , boxedValues)[rebase];
    result == null && (result = boxedValues[rebase] = internalFromInt(value));
    return result;
  }
  return internalFromInt(value);
}

function internalFromInt(value){
  if (value >= 0) {
    return [value, 0];
  }
   else {
    return [value + 4294967296, -4294967296];
  }
}

function lowBits_0(a){
  if (a[0] >= 2147483648) {
    return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
  }
   else {
    return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
  }
}

function makeFromBits(highBits, lowBits){
  var high, low;
  high = highBits * 4294967296;
  low = lowBits;
  lowBits < 0 && (low += 4294967296);
  return [low, high];
}

function mul(a, b){
  var a1, a2, a3, a4, b1, b2, b3, b4, res;
  if (a[0] == 0 && a[1] == 0) {
    return $clinit_183() , ZERO;
  }
  if (b[0] == 0 && b[1] == 0) {
    return $clinit_183() , ZERO;
  }
  if (eq(a, ($clinit_183() , MIN_VALUE))) {
    return multByMinValue(b);
  }
  if (eq(b, MIN_VALUE)) {
    return multByMinValue(a);
  }
  if (a[1] < 0) {
    if (b[1] < 0) {
      return mul(neg(a), neg(b));
    }
     else {
      return neg(mul(neg(a), b));
    }
  }
  if (b[1] < 0) {
    return neg(mul(a, neg(b)));
  }
  if (compare_0(a, TWO_PWR_24) < 0 && compare_0(b, TWO_PWR_24) < 0) {
    return create((a[1] + a[0]) * (b[1] + b[0]), 0);
  }
  a3 = a[1] % 281474976710656;
  a4 = a[1] - a3;
  a1 = a[0] % 65536;
  a2 = a[0] - a1;
  b3 = b[1] % 281474976710656;
  b4 = b[1] - b3;
  b1 = b[0] % 65536;
  b2 = b[0] - b1;
  res = ZERO;
  res = addTimes(res, a4, b1);
  res = addTimes(res, a3, b2);
  res = addTimes(res, a3, b1);
  res = addTimes(res, a2, b3);
  res = addTimes(res, a2, b2);
  res = addTimes(res, a2, b1);
  res = addTimes(res, a1, b4);
  res = addTimes(res, a1, b3);
  res = addTimes(res, a1, b2);
  res = addTimes(res, a1, b1);
  return res;
}

function multByMinValue(a){
  if ((lowBits_0(a) & 1) == 1) {
    return $clinit_183() , MIN_VALUE;
  }
   else {
    return $clinit_183() , ZERO;
  }
}

function neg(a){
  var newHigh, newLow;
  if (eq(a, ($clinit_183() , MIN_VALUE))) {
    return MIN_VALUE;
  }
  newHigh = -a[1];
  newLow = -a[0];
  if (newLow > 4294967295) {
    newLow -= 4294967296;
    newHigh += 4294967296;
  }
  if (newLow < 0) {
    newLow += 4294967296;
    newHigh -= 4294967296;
  }
  return [newLow, newHigh];
}

function pwrAsDouble(n){
  if (n <= 30) {
    return 1 << n;
  }
   else {
    return pwrAsDouble(30) * pwrAsDouble(n - 30);
  }
}

function shl(a, n){
  var diff, newHigh, newLow, twoToN;
  n &= 63;
  if (eq(a, ($clinit_183() , MIN_VALUE))) {
    if (n == 0) {
      return a;
    }
     else {
      return ZERO;
    }
  }
  if (a[1] < 0) {
    return neg(shl(neg(a), n));
  }
  twoToN = pwrAsDouble(n);
  newHigh = a[1] * twoToN % 1.8446744073709552E19;
  newLow = a[0] * twoToN;
  diff = newLow - newLow % 4294967296;
  newHigh += diff;
  newLow -= diff;
  newHigh >= 9223372036854775807 && (newHigh -= 1.8446744073709552E19);
  return [newLow, newHigh];
}

function shr(a, n){
  var newHigh, newLow, shiftFact;
  n &= 63;
  shiftFact = pwrAsDouble(n);
  newHigh = Math.floor(a[1] / shiftFact);
  newLow = Math.floor(a[0] / shiftFact);
  return create(newLow, newHigh);
}

function shru(a, n){
  var sr;
  n &= 63;
  sr = shr(a, n);
  a[1] < 0 && (sr = add_4(sr, shl(($clinit_183() , TWO), 63 - n)));
  return sr;
}

function sub(a, b){
  var newHigh, newLow;
  newHigh = a[1] - b[1];
  newLow = a[0] - b[0];
  return create(newLow, newHigh);
}

function toDoubleRoundDown(a){
  var diff, magnitute, toSubtract;
  magnitute = round_int(Math.log(a[1]) / ($clinit_183() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toSubtract = (1 << diff) - 1;
    return a[1] + (a[0] - toSubtract);
  }
}

function toDoubleRoundUp(a){
  var diff, magnitute, toAdd;
  magnitute = round_int(Math.log(a[1]) / ($clinit_183() , LN_2));
  if (magnitute <= 48) {
    return a[1] + a[0];
  }
   else {
    diff = magnitute - 48;
    toAdd = (1 << diff) - 1;
    return a[1] + (a[0] + toAdd);
  }
}

function toString_9(a){
  var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
  if (a[0] == 0 && a[1] == 0) {
    return '0';
  }
  if (eq(a, ($clinit_183() , MIN_VALUE))) {
    return '-9223372036854775808';
  }
  if (a[1] < 0) {
    return '-' + toString_9(neg(a));
  }
  rem = a;
  res = '';
  while (!(rem[0] == 0 && rem[1] == 0)) {
    tenPowerLong = fromInt(1000000000);
    remDivTenPower = div_0(rem, tenPowerLong);
    digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
    rem = remDivTenPower;
    if (!(rem[0] == 0 && rem[1] == 0)) {
      zeroesNeeded = 9 - digits.length;
      for (; zeroesNeeded > 0; --zeroesNeeded) {
        digits = '0' + digits;
      }
    }
    res = digits + res;
  }
  return res;
}

function xor(a, b){
  return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) ^ ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) ^ lowBits_0(b));
}

function $clinit_182(){
  $clinit_182 = nullMethod;
  boxedValues = initDim(_3_3D_classLit, 242, 46, 256, 0);
}

var boxedValues;
function $clinit_183(){
  $clinit_183 = nullMethod;
  LN_2 = Math.log(2);
  MAX_VALUE = P7fffffffffffffff_longLit;
  MIN_VALUE = N8000000000000000_longLit;
  NEG_ONE = fromInt(-1);
  ONE = fromInt(1);
  TWO = fromInt(2);
  TWO_PWR_24 = P1000000_longLit;
  ZERO = fromInt(0);
}

var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
function $ImageResourcePrototype(this$static, url, left, top_0, width, height){
  this$static.left_0 = left;
  this$static.top_0 = top_0;
  this$static.height_0 = height;
  this$static.width_0 = width;
  this$static.url = url;
  return this$static;
}

function getClass_104(){
  return Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit;
}

function ImageResourcePrototype(){
}

_ = ImageResourcePrototype.prototype = new Object_0;
_.getClass$ = getClass_104;
_.typeId$ = 0;
_.height_0 = 0;
_.left_0 = 0;
_.top_0 = 0;
_.url = null;
_.width_0 = 0;
function $CommandCanceledException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_105(){
  return Lcom_google_gwt_user_client_CommandCanceledException_2_classLit;
}

function CommandCanceledException(){
}

_ = CommandCanceledException.prototype = new RuntimeException;
_.getClass$ = getClass_105;
_.typeId$ = 65;
function $CommandExecutor(this$static){
  this$static.cancellationTimer = $CommandExecutor$1(new CommandExecutor$1, this$static);
  this$static.commands = $ArrayList(new ArrayList);
  this$static.executionTimer = $CommandExecutor$2(new CommandExecutor$2, this$static);
  this$static.iterator = $CommandExecutor$CircularIterator(new CommandExecutor$CircularIterator, this$static);
  return this$static;
}

function $doCommandCanceled(this$static){
  var cmd;
  cmd = $getLast(this$static.iterator);
  $remove_0(this$static.iterator);
  cmd != null && canCast(cmd.typeId$, 49) && $CommandCanceledException(new CommandCanceledException, dynamicCast(cmd, 49));
  this$static.executing = false;
  $maybeStartExecutionTimer(this$static);
}

function $doExecuteCommands(this$static, startTimeMillis){
  var command, element, wasCanceled;
  wasCanceled = false;
  try {
    this$static.executing = true;
    this$static.iterator.end = this$static.commands.size;
    $schedule(this$static.cancellationTimer, 10000);
    while ($hasNext(this$static.iterator)) {
      element = $next(this$static.iterator);
      try {
        if (element == null) {
          return;
        }
        if (element != null && canCast(element.typeId$, 49)) {
          command = dynamicCast(element, 49);
          command.execute_0();
        }
      }
       finally {
        wasCanceled = this$static.iterator.last == -1;
        if (wasCanceled) {
          return;
        }
        $remove_0(this$static.iterator);
      }
      if ((new Date).getTime() - startTimeMillis >= 100) {
        return;
      }
    }
  }
   finally {
    if (!wasCanceled) {
      $cancel_0(this$static.cancellationTimer);
      this$static.executing = false;
      $maybeStartExecutionTimer(this$static);
    }
  }
}

function $maybeStartExecutionTimer(this$static){
  if (this$static.commands.size != 0 && !this$static.executionTimerPending && !this$static.executing) {
    this$static.executionTimerPending = true;
    $schedule(this$static.executionTimer, 1);
  }
}

function $submit(this$static, command){
  $add_13(this$static.commands, command);
  $maybeStartExecutionTimer(this$static);
}

function getClass_106(){
  return Lcom_google_gwt_user_client_CommandExecutor_2_classLit;
}

function CommandExecutor(){
}

_ = CommandExecutor.prototype = new Object_0;
_.getClass$ = getClass_106;
_.typeId$ = 0;
_.executing = false;
_.executionTimerPending = false;
function $clinit_194(){
  $clinit_194 = nullMethod;
  $clinit_34();
}

function $CommandExecutor$1(this$static, this$0){
  $clinit_194();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_107(){
  return Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit;
}

function run_1(){
  if (!this.this$0.executing) {
    return;
  }
  $doCommandCanceled(this.this$0);
}

function CommandExecutor$1(){
}

_ = CommandExecutor$1.prototype = new Timer;
_.getClass$ = getClass_107;
_.run = run_1;
_.typeId$ = 66;
_.this$0 = null;
function $clinit_195(){
  $clinit_195 = nullMethod;
  $clinit_34();
}

function $CommandExecutor$2(this$static, this$0){
  $clinit_195();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_108(){
  return Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit;
}

function run_2(){
  this.this$0.executionTimerPending = false;
  $doExecuteCommands(this.this$0, (new Date).getTime());
}

function CommandExecutor$2(){
}

_ = CommandExecutor$2.prototype = new Timer;
_.getClass$ = getClass_108;
_.run = run_2;
_.typeId$ = 67;
_.this$0 = null;
function $CommandExecutor$CircularIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $getLast(this$static){
  return $get_3(this$static.this$0.commands, this$static.last);
}

function $hasNext(this$static){
  return this$static.next < this$static.end;
}

function $next(this$static){
  var command;
  this$static.last = this$static.next;
  command = $get_3(this$static.this$0.commands, this$static.next++);
  this$static.next >= this$static.end && (this$static.next = 0);
  return command;
}

function $remove_0(this$static){
  $remove_14(this$static.this$0.commands, this$static.last);
  --this$static.end;
  this$static.last <= this$static.next && --this$static.next < 0 && (this$static.next = 0);
  this$static.last = -1;
}

function getClass_109(){
  return Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit;
}

function hasNext(){
  return this.next < this.end;
}

function next_0(){
  return $next(this);
}

function remove_2(){
  $remove_0(this);
}

function CommandExecutor$CircularIterator(){
}

_ = CommandExecutor$CircularIterator.prototype = new Object_0;
_.getClass$ = getClass_109;
_.hasNext = hasNext;
_.next_0 = next_0;
_.remove_0 = remove_2;
_.typeId$ = 0;
_.end = 0;
_.last = -1;
_.next = 0;
_.this$0 = null;
function dispatchEvent_0(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(($clinit_56() , evt).type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    evt.cancelBubble = true;
    ($clinit_56() , evt).returnValue = false;
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem = null;
function $clinit_198(){
  $clinit_198 = nullMethod;
  commandExecutor = $CommandExecutor(new CommandExecutor);
}

function addCommand(cmd){
  $clinit_198();
  if (!cmd) {
    throw $NullPointerException_0(new NullPointerException, 'cmd cannot be null');
  }
  $submit(commandExecutor, cmd);
}

var commandExecutor;
function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_14 && (TYPE_14 = $GwtEvent$Type(new GwtEvent$Type));
  if (!handlers_0) {
    handlers_0 = $HandlerManager_0(new HandlerManager, null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_14, handler);
}

function sinkEvents_0(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var handlers_0 = null;
function $revive_0(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function dispatch_14(p0){
  $previewNativeEvent(dynamicCast(p0, 50).this$0, this);
  singleton.isFirstHandler = false;
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_14 && !!handlers && $containsKey(handlers.registry.map, TYPE_14)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive_0(singleton);
    singleton.nativeEvent = nativeEvent;
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

function getAssociatedType_15(){
  return TYPE_14;
}

function getClass_110(){
  return Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit;
}

function revive_0(){
  $revive_0(this);
}

function Event$NativePreviewEvent(){
}

_ = Event$NativePreviewEvent.prototype = new GwtEvent;
_.dispatch = dispatch_14;
_.getAssociatedType = getAssociatedType_15;
_.getClass$ = getClass_110;
_.revive = revive_0;
_.typeId$ = 0;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
_.nativeEvent = null;
var TYPE_14 = null, singleton = null;
function $clinit_204(){
  $clinit_204 = nullMethod;
  impl = $HistoryImplIE6(new HistoryImplIE6);
  !$init_0(impl) && (impl = null);
}

function addValueChangeHandler(handler){
  $clinit_204();
  return impl?$addValueChangeHandler(impl, handler):null;
}

var impl = null;
function getClass_111(){
  return Lcom_google_gwt_user_client_Timer$1_2_classLit;
}

function onClose(event_0){
  while (($clinit_34() , timers).size > 0) {
    dynamicCast($get_3(timers, 0), 51).cancel();
  }
}

function Timer$1(){
}

_ = Timer$1.prototype = new Object_0;
_.getClass$ = getClass_111;
_.onClose = onClose;
_.typeId$ = 68;
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_11?TYPE_11:(TYPE_11 = $GwtEvent$Type(new GwtEvent$Type)), handler);
}

function addHandler(type, handler){
  return $addHandler_0(getHandlers(), type, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_12 && (TYPE_12 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_12), handler);
}

function getHandlers(){
  !handlers_1 && (handlers_1 = $Window$WindowHandlers(new Window$WindowHandlers));
  return handlers_1;
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler((!initWindowCloseHandler && (initWindowCloseHandler = new com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$1) , 'function __gwt_initWindowCloseHandler(beforeunload, unload) {\r\n  var wnd = window\r\n  , oldOnBeforeUnload = wnd.onbeforeunload\r\n  , oldOnUnload = wnd.onunload;\r\n  \r\n  wnd.onbeforeunload = function(evt) {\r\n    var ret, oldRet;\r\n    try {\r\n      ret = beforeunload();\r\n    } finally {\r\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\r\n    }\r\n    // Avoid returning null as IE6 will coerce it into a string.\r\n    // Ensure that "" gets returned properly.\r\n    if (ret != null) {\r\n      return ret;\r\n    }\r\n    if (oldRet != null) {\r\n      return oldRet;\r\n    }\r\n    // returns undefined.\r\n  };\r\n  \r\n  wnd.onunload = function(evt) {\r\n    try {\r\n      unload();\r\n    } finally {\r\n      oldOnUnload && oldOnUnload(evt);\r\n      wnd.onresize = null;\r\n      wnd.onscroll = null;\r\n      wnd.onbeforeunload = null;\r\n      wnd.onunload = null;\r\n    }\r\n  };\r\n  \r\n  // Remove the reference once we\'ve initialize the handler\r\n  wnd.__gwt_initWindowCloseHandler = undefined;\r\n}\r\n'), new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler((!initWindowResizeHandler && (initWindowResizeHandler = new com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$2) , "function __gwt_initWindowResizeHandler(resize) {\r\n  var wnd = window, oldOnResize = wnd.onresize;\r\n  \r\n  wnd.onresize = function(evt) {\r\n    try {\r\n      resize();\r\n    } finally {\r\n      oldOnResize && oldOnResize(evt);\r\n    }\r\n  };\r\n  \r\n  // Remove the reference once we've initialize the handler\r\n  wnd.__gwt_initWindowResizeHandler = undefined;\r\n}\r\n"), new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0(getHandlers());
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = ($clinit_207() , new Window$ClosingEvent);
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width;
  if (resizeHandlersInitialized) {
    width = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width || lastResizeHeight != height) {
      lastResizeWidth = width;
      lastResizeHeight = height;
      fire_1(getHandlers(), width);
    }
  }
}

var closeHandlersInitialized = false, handlers_1 = null, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_207(){
  $clinit_207 = nullMethod;
  TYPE_15 = $GwtEvent$Type(new GwtEvent$Type);
}

function dispatch_15(p0){
  throwClassCastExceptionUnlessNull(p0);
  null.nullMethod();
}

function getAssociatedType_16(){
  return TYPE_15;
}

function getClass_112(){
  return Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit;
}

function Window$ClosingEvent(){
}

_ = Window$ClosingEvent.prototype = new GwtEvent;
_.dispatch = dispatch_15;
_.getAssociatedType = getAssociatedType_16;
_.getClass$ = getClass_112;
_.typeId$ = 0;
var TYPE_15;
function buildListParamMap(queryString){
  var entry, entry$iterator, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, values, regexp;
  out = $HashMap(new HashMap);
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1, queryString.length - 1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      if (kv[0].length == 0) {
        continue;
      }
      values = dynamicCast(out.get(kv[0]), 52);
      if (!values) {
        values = $ArrayList(new ArrayList);
        out.put(kv[0], values);
      }
      values.add_0(kv.length > 1?(throwIfNull('encodedURLComponent', kv[1]) , regexp = /\+/g , decodeURIComponent(kv[1].replace(regexp, '%20'))):'');
    }
  }
  for (entry$iterator = out.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 53);
    entry.setValue(unmodifiableList(dynamicCast(entry.getValue(), 52)));
  }
  out = ($clinit_465() , $Collections$UnmodifiableMap(new Collections$UnmodifiableMap, out));
  return out;
}

function ensureParameterMap(){
  var kv, kvPair, kvPair$array, kvPair$index, kvPair$max, qs, queryString, regexp;
  if (!paramMap) {
    paramMap = $HashMap(new HashMap);
    queryString = $getQueryString();
    if (queryString != null && queryString.length > 1) {
      qs = queryString.substr(1, queryString.length - 1);
      for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
        kvPair = kvPair$array[kvPair$index];
        kv = $split(kvPair, '=', 2);
        kv.length > 1?$put_0(paramMap, kv[0], (throwIfNull('encodedURLComponent', kv[1]) , regexp = /\+/g , decodeURIComponent(kv[1].replace(regexp, '%20')))):$put_0(paramMap, kv[0], '');
      }
    }
  }
}

var listParamMap = null, paramMap = null;
function $Window$WindowHandlers(this$static){
  this$static.registry = $HandlerManager$HandlerRegistry(new HandlerManager$HandlerRegistry);
  this$static.source = null;
  this$static.isReverseOrder = false;
  return this$static;
}

function getClass_113(){
  return Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit;
}

function Window$WindowHandlers(){
}

_ = Window$WindowHandlers.prototype = new HandlerManager;
_.getClass$ = getClass_113;
_.typeId$ = 69;
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case 'mousewheel':
      return 131072;
    case 'DOMMouseScroll':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

var eventSystemIsInitialized = false;
function $getChild(elem, index){
  return elem.children[index];
}

function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  dispatchEvent_1 = $entry(function(){
    var oldEventTarget = ($clinit_57() , currentEventTarget);
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var listener, curElem = this;
    while (curElem && !(listener = curElem.__listener)) {
      curElem = curElem.parentElement;
    }
    listener && !(listener != null && listener.typeMarker$ != nullMethod && listener.typeId$ != 2) && listener != null && canCast(listener.typeId$, 29) && dispatchEvent_0($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_1.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var bodyDispatcher = $entry(function(){
    dispatchEvent_1.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index){
  index >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index]);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 3 && (elem.ondblclick = bits & 3?dispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchEvent_1:null);
  chMask & 65536 && (elem.onerror = bits & 65536?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var dispatchDblClickEvent = null, dispatchEvent_1 = null;
function $ElementMapperImpl(this$static){
  this$static.uiObjectList = $ArrayList(new ArrayList);
  return this$static;
}

function $get_1(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  if (index < 0) {
    return null;
  }
  return dynamicCast($get_3(this$static.uiObjectList, index), 32);
}

function $put(this$static, uiObject){
  var index;
  if (!this$static.freeList) {
    index = this$static.uiObjectList.size;
    $add_13(this$static.uiObjectList, uiObject);
  }
   else {
    index = this$static.freeList.index_0;
    $set_0(this$static.uiObjectList, index, uiObject);
    this$static.freeList = this$static.freeList.next;
  }
  uiObject.getElement_0()['__uiObjectID'] = index;
}

function $removeByElement(this$static, elem){
  var index, index_0;
  index = (index_0 = elem['__uiObjectID'] , index_0 == null?-1:index_0);
  elem['__uiObjectID'] = null;
  $set_0(this$static.uiObjectList, index, null);
  this$static.freeList = $ElementMapperImpl$FreeNode(new ElementMapperImpl$FreeNode, index, this$static.freeList);
}

function getClass_114(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit;
}

function ElementMapperImpl(){
}

_ = ElementMapperImpl.prototype = new Object_0;
_.getClass$ = getClass_114;
_.typeId$ = 0;
_.freeList = null;
function $ElementMapperImpl$FreeNode(this$static, index, next){
  this$static.index_0 = index;
  this$static.next = next;
  return this$static;
}

function getClass_115(){
  return Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit;
}

function ElementMapperImpl$FreeNode(){
}

_ = ElementMapperImpl$FreeNode.prototype = new Object_0;
_.getClass$ = getClass_115;
_.typeId$ = 0;
_.index_0 = 0;
_.next = null;
function $addValueChangeHandler(this$static, handler){
  return $addHandler_0(this$static.handlers, (!TYPE_13 && (TYPE_13 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_13), handler);
}

function decodeFragment(encodedFragment){
  return decodeURI(encodedFragment.replace('%23', '#'));
}

function encodeFragment(fragment){
  return encodeURI(fragment).replace('#', '%23');
}

function fireEvent_2(event_0){
  $fireEvent_0(this.handlers, event_0);
}

function getClass_116(){
  return Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit;
}

function nativeUpdateOnEvent(historyToken){
}

function newItemOnEvent(historyToken){
  historyToken = historyToken == null?'':historyToken;
  if (!$equals_1(historyToken, $wnd.__gwt_historyToken || '')) {
    $wnd.__gwt_historyToken = historyToken;
    this.nativeUpdateOnEvent(historyToken);
    fire_2(this);
  }
}

function HistoryImpl(){
}

_ = HistoryImpl.prototype = new Object_0;
_.decodeFragment = decodeFragment;
_.encodeFragment = encodeFragment;
_.fireEvent_0 = fireEvent_2;
_.getClass$ = getClass_116;
_.nativeUpdateOnEvent = nativeUpdateOnEvent;
_.newItemOnEvent = newItemOnEvent;
_.typeId$ = 70;
function $HistoryImplIE6(this$static){
  this$static.handlers = $HandlerManager(new HandlerManager, null);
  return this$static;
}

function $init_0(this$static){
  var tokenElement;
  this$static.historyFrame = $doc.getElementById('__gwt_historyFrame');
  if (!this$static.historyFrame) {
    return false;
  }
  $initHistoryToken(this$static);
  tokenElement = getTokenElement(this$static.historyFrame);
  tokenElement?($wnd.__gwt_historyToken = tokenElement.innerText , undefined):$navigateFrame(this$static, $wnd.__gwt_historyToken || '');
  $injectGlobalHandler(this$static);
  $initUrlCheckTimer(this$static);
  return true;
}

function $initHistoryToken(this$static){
  var token = '';
  var hash = getLocationHash();
  if (hash.length > 0) {
    try {
      token = this$static.decodeFragment(hash.substring(1));
    }
     catch (e) {
      $wnd.location.hash = '';
    }
  }
  $wnd.__gwt_historyToken = token;
}

function $initUrlCheckTimer(this$static){
  var historyImplRef = this$static;
  var urlChecker = $entry(function(){
    $wnd.setTimeout(urlChecker, 250);
    if (historyImplRef.handleWindowReloadCanceled()) {
      return;
    }
    var hash = getLocationHash();
    if (hash.length > 0) {
      var token = '';
      try {
        token = historyImplRef.decodeFragment(hash.substring(1));
      }
       catch (e) {
        historyImplRef.reloadWindow();
      }
      var historyToken = $wnd.__gwt_historyToken || '';
      historyToken && token != historyToken && historyImplRef.reloadWindow();
    }
  }
  );
  urlChecker();
}

function $injectGlobalHandler(this$static){
  var historyImplRef = this$static;
  $wnd.__gwt_onHistoryLoad = $entry(function(token){
    historyImplRef.newItemOnEvent(token);
  }
  );
}

function $navigateFrame(this$static, token){
  var escaped = (div = $createElement(($clinit_56() , $doc), 'div') , div.innerText = token || '' , div.innerHTML), div;
  var doc = this$static.historyFrame.contentWindow.document;
  doc.open();
  doc.write('<html><body onload="if(parent.__gwt_onHistoryLoad)parent.__gwt_onHistoryLoad(__gwt_historyToken.innerText)"><div id="__gwt_historyToken">' + escaped + '<\/div><\/body><\/html>');
  doc.close();
}

function $updateHash(this$static, token){
  $wnd.location.hash = this$static.encodeFragment(token);
}

function getClass_117(){
  return Lcom_google_gwt_user_client_impl_HistoryImplIE6_2_classLit;
}

function getLocationHash(){
  var href = $wnd.location.href;
  var hashLoc = href.lastIndexOf('#');
  return hashLoc > 0?href.substring(hashLoc):'';
}

function getTokenElement(historyFrame){
  if (historyFrame.contentWindow) {
    var doc = historyFrame.contentWindow.document;
    return doc.getElementById('__gwt_historyToken');
  }
}

function handleWindowReloadCanceled(){
  if (this.reloadedWindow) {
    this.reloadedWindow = false;
    $updateHash(this, $wnd.__gwt_historyToken || '');
    return true;
  }
  return false;
}

function nativeUpdateOnEvent_0(historyToken){
  $wnd.location.hash = this.encodeFragment(historyToken);
}

function reloadWindow(){
  this.reloadedWindow = true;
  $wnd.location.reload();
}

function HistoryImplIE6(){
}

_ = HistoryImplIE6.prototype = new HistoryImpl;
_.getClass$ = getClass_117;
_.handleWindowReloadCanceled = handleWindowReloadCanceled;
_.nativeUpdateOnEvent = nativeUpdateOnEvent_0;
_.reloadWindow = reloadWindow;
_.typeId$ = 71;
_.historyFrame = null;
_.reloadedWindow = false;
function $getQueryString(){
  var href = $wnd.location.href;
  var hashLoc = href.lastIndexOf('#');
  hashLoc >= 0 && (href = href.substring(0, hashLoc));
  var questionLoc = href.lastIndexOf('?');
  return questionLoc > 0?href.substring(questionLoc):'';
}

function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement(($clinit_56() , $doc), initFunc);
  $doc.body.appendChild(scriptElem);
  cmd.execute_0();
  $doc.body.removeChild(scriptElem);
}

function execute_4(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}

function getClass_118(){
  return Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit;
}

function WindowImplIE$1(){
}

_ = WindowImplIE$1.prototype = new Object_0;
_.execute_0 = execute_4;
_.getClass$ = getClass_118;
_.typeId$ = 72;
function execute_5(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}

function getClass_119(){
  return Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit;
}

function WindowImplIE$2(){
}

_ = WindowImplIE$2.prototype = new Object_0;
_.execute_0 = execute_5;
_.getClass$ = getClass_119;
_.typeId$ = 73;
var initWindowCloseHandler = null, initWindowResizeHandler = null;
function getClass_120(){
  return Lcom_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1StaticClientBundleGenerator$1_2_classLit;
}

function com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$1(){
}

_ = com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$1.prototype = new Object_0;
_.getClass$ = getClass_120;
_.typeId$ = 0;
function getClass_121(){
  return Lcom_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1StaticClientBundleGenerator$2_2_classLit;
}

function com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$2(){
}

_ = com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$2.prototype = new Object_0;
_.getClass$ = getClass_121;
_.typeId$ = 0;
function $add_3(this$static, child, container){
  $removeFromParent(child);
  $add_9(this$static.children_0, child);
  container.appendChild(child.getElement_0());
  $setParent(child, this$static);
}

function $adjustIndex(this$static, child, beforeIndex){
  var idx;
  $checkIndexBoundsForInsertion(this$static, beforeIndex);
  if (child.parent_0 == this$static) {
    idx = $indexOf(this$static.children_0, child);
    idx < beforeIndex && --beforeIndex;
  }
  return beforeIndex;
}

function $checkIndexBoundsForInsertion(this$static, index){
  if (index < 0 || index > this$static.children_0.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
}

function $insert(this$static, child, container, beforeIndex, domInsert){
  beforeIndex = $adjustIndex(this$static, child, beforeIndex);
  $removeFromParent(child);
  $insert_0(this$static.children_0, child, beforeIndex);
  domInsert?$insertChild(container, child.getElement_0(), beforeIndex):container.appendChild(child.getElement_0());
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.getElement_0();
    (parent_0 = ($clinit_56() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $remove_7(this$static.children_0, w);
  }
  return true;
}

function getClass_122(){
  return Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit;
}

function iterator_1(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this.children_0);
}

function remove_3(w){
  return $remove_1(this, w);
}

function ComplexPanel(){
}

_ = ComplexPanel.prototype = new Panel;
_.getClass$ = getClass_122;
_.iterator_0 = iterator_1;
_.remove = remove_3;
_.typeId$ = 74;
function $AbsolutePanel(this$static){
  $AbsolutePanel_0(this$static, $createElement(($clinit_56() , $doc), 'div'));
  this$static.element_0.style['position'] = 'relative';
  this$static.element_0.style['overflow'] = 'hidden';
  return this$static;
}

function $AbsolutePanel_0(this$static, elem){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element_0 = elem;
  return this$static;
}

function $add_4(this$static, w){
  $add_3(this$static, w, this$static.element_0);
}

function $add_5(this$static, w, left, top_0){
  var beforeIndex;
  $removeFromParent(w);
  beforeIndex = this$static.children_0.size;
  this$static.setWidgetPositionImpl(w, left, top_0);
  $insert(this$static, w, this$static.element_0, beforeIndex, true);
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(w.getElement_0());
  return removed;
}

function $setWidgetPositionImpl(w, left, top_0){
  var h;
  h = w.getElement_0();
  if (left == -1 && top_0 == -1) {
    changeToStaticPositioning(h);
  }
   else {
    h.style['position'] = 'absolute';
    h.style['left'] = left + 'px';
    h.style['top'] = top_0 + 'px';
  }
}

function add_5(w){
  $add_3(this, w, this.element_0);
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

function getClass_123(){
  return Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit;
}

function remove_4(w){
  var removed;
  return removed = $remove_1(this, w) , removed && changeToStaticPositioning(w.getElement_0()) , removed;
}

function setWidgetPositionImpl(w, left, top_0){
  $setWidgetPositionImpl(w, left, top_0);
}

function AbsolutePanel(){
}

_ = AbsolutePanel.prototype = new ComplexPanel;
_.add = add_5;
_.getClass$ = getClass_123;
_.remove = remove_4;
_.setWidgetPositionImpl = setWidgetPositionImpl;
_.typeId$ = 75;
function $Anchor(this$static){
  $setElement_0(this$static, $createElement(($clinit_56() , $doc), 'a'));
  this$static.element_0['className'] = 'gwt-Anchor';
  return this$static;
}

function getClass_124(){
  return Lcom_google_gwt_user_client_ui_Anchor_2_classLit;
}

function setFocus_1(focused){
  focused?(this.element_0.focus() , undefined):(this.element_0.blur() , undefined);
}

function setTabIndex_1(index){
  this.element_0.tabIndex = index;
}

function setText_1(text){
  ($clinit_56() , this.element_0).innerText = text || '';
}

function Anchor(){
}

_ = Anchor.prototype = new FocusWidget;
_.getClass$ = getClass_124;
_.setFocus = setFocus_1;
_.setTabIndex = setTabIndex_1;
_.setText = setText_1;
_.typeId$ = 76;
function $clinit_227(){
  $clinit_227 = nullMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function $AttachDetachException(this$static, causes){
  $clinit_227();
  $Throwable(this$static, 'One or more exceptions caught, see full set in AttachDetachException#getCauses', causes.map.size == 0?null:dynamicCast($toArray(causes, initDim(_3Ljava_lang_Throwable_2_classLit, 241, 45, 0, 0)), 54)[0]);
  return this$static;
}

function getClass_125(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit;
}

function tryCommand(hasWidgets, c){
  var old;
  $clinit_227();
  var $e0, caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator_0(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 33);
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 45)) {
        e = $e0;
        !caught && (caught = $HashSet(new HashSet));
        old = $put_0(caught.map, e, caught);
      }
       else 
        throw $e0;
    }
  }
  if (caught) {
    throw $AttachDetachException(new AttachDetachException, caught);
  }
}

function AttachDetachException(){
}

_ = AttachDetachException.prototype = new RuntimeException;
_.getClass$ = getClass_125;
_.typeId$ = 77;
var attachCommand, detachCommand;
function execute_6(w){
  w.onAttach();
}

function getClass_126(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit;
}

function AttachDetachException$1(){
}

_ = AttachDetachException$1.prototype = new Object_0;
_.execute_1 = execute_6;
_.getClass$ = getClass_126;
_.typeId$ = 0;
function execute_7(w){
  w.onDetach();
}

function getClass_127(){
  return Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit;
}

function AttachDetachException$2(){
}

_ = AttachDetachException$2.prototype = new Object_0;
_.execute_1 = execute_7;
_.getClass$ = getClass_127;
_.typeId$ = 0;
function $CellPanel(this$static){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.table = $createElement(($clinit_56() , $doc), 'table');
  this$static.body_0 = $createElement($doc, 'tbody');
  this$static.table.appendChild(this$static.body_0);
  this$static.element_0 = this$static.table;
  return this$static;
}

function getClass_128(){
  return Lcom_google_gwt_user_client_ui_CellPanel_2_classLit;
}

function CellPanel(){
}

_ = CellPanel.prototype = new ComplexPanel;
_.getClass$ = getClass_128;
_.typeId$ = 78;
_.body_0 = null;
_.table = null;
function $setWidget_1(this$static, w){
  $setWidget(this$static.decPanel, w);
  $maybeUpdateSize(this$static);
}

function doAttachChildren_1(){
  $onAttach(this.decPanel);
}

function doDetachChildren_1(){
  $onDetach(this.decPanel);
}

function getClass_129(){
  return Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit;
}

function getWidget_0(){
  return this.decPanel.widget;
}

function iterator_2(){
  return this.decPanel.iterator_0();
}

function remove_5(w){
  return this.decPanel.remove(w);
}

function setWidget_1(w){
  $setWidget(this.decPanel, w);
  $maybeUpdateSize(this);
}

function DecoratedPopupPanel(){
}

_ = DecoratedPopupPanel.prototype = new PopupPanel;
_.doAttachChildren = doAttachChildren_1;
_.doDetachChildren = doDetachChildren_1;
_.getClass$ = getClass_129;
_.getWidget = getWidget_0;
_.iterator_0 = iterator_2;
_.remove = remove_5;
_.setWidget = setWidget_1;
_.typeId$ = 79;
_.decPanel = null;
function $DialogBox(this$static){
  var mouseHandler, td, td_0, tr, rowStyles_0, parent_1;
  $PopupPanel_0(this$static, false);
  this$static.modal = true;
  rowStyles_0 = initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['dialogTop', 'dialogMiddle', 'dialogBottom']);
  this$static.decPanel = $DecoratorPanel(new DecoratorPanel, rowStyles_0, 1);
  this$static.decPanel.getStyleElement()['className'] = '';
  setStylePrimaryName($getStyleElement_1($getFirstChildElement(($clinit_56() , this$static.element_0))), 'gwt-DecoratedPopupPanel');
  $setWidget_0(this$static, this$static.decPanel);
  setStyleName($getFirstChildElement(this$static.element_0), 'popupContent', false);
  setStyleName(this$static.decPanel.containerElem, 'dialogContent', true);
  this$static.caption = $DialogBox$CaptionImpl(new DialogBox$CaptionImpl);
  td = (tr = this$static.decPanel.tbody.children[0] , td_0 = tr.children[1] , $getFirstChildElement(td_0));
  td.appendChild(this$static.caption.element_0);
  $adopt(this$static, this$static.caption);
  this$static.caption.getStyleElement()['className'] = 'Caption';
  (parent_1 = $getFirstChildElement(this$static.element_0).parentNode , (!parent_1 || parent_1.nodeType != 1) && (parent_1 = null) , parent_1)['className'] = 'gwt-DialogBox';
  this$static.windowWidth = $getClientWidth($doc);
  this$static.clientLeft_0 = $getBodyOffsetLeft($doc);
  this$static.clientTop_0 = $getBodyOffsetTop($doc);
  mouseHandler = $DialogBox$MouseHandler(new DialogBox$MouseHandler, this$static);
  $addDomHandler(this$static, mouseHandler, ($clinit_127() , $clinit_127() , TYPE_6));
  $addDomHandler(this$static, mouseHandler, ($clinit_135() , $clinit_135() , TYPE_10));
  $addDomHandler(this$static, mouseHandler, ($clinit_129() , $clinit_129() , TYPE_7));
  $addDomHandler(this$static, mouseHandler, ($clinit_133() , $clinit_133() , TYPE_9));
  $addDomHandler(this$static, mouseHandler, ($clinit_131() , $clinit_131() , TYPE_8));
  return this$static;
}

function $beginDragging(this$static, event_0){
  $onMouseDown(this$static, $getX(event_0), $getY(event_0));
}

function $hide_5(this$static){
  if (this$static.resizeHandlerRegistration) {
    $removeHandler(this$static.resizeHandlerRegistration);
    this$static.resizeHandlerRegistration = null;
  }
  $hide_0(this$static);
}

function $isCaptionEvent(this$static, event_0){
  var target, td, tr, parent_0;
  target = ($clinit_56() , event_0).srcElement;
  if (is_0(target)) {
    return $isOrHasChild((parent_0 = (tr = this$static.decPanel.tbody.children[0] , td = tr.children[1] , $getFirstChildElement(td)).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), target);
  }
  return false;
}

function $onMouseDown(this$static, x, y){
  this$static.dragging = true;
  setCapture(this$static.element_0);
  this$static.dragStartX = x;
  this$static.dragStartY = y;
}

function $onMouseMove(this$static, x, y){
  var absX, absY;
  if (this$static.dragging) {
    absX = x + $getAbsoluteLeft(($clinit_56() , this$static.element_0));
    absY = y + $getAbsoluteTop(this$static.element_0);
    if (absX < this$static.clientLeft_0 || absX >= this$static.windowWidth || absY < this$static.clientTop_0) {
      return;
    }
    $setPopupPosition(this$static, absX - this$static.dragStartX, absY - this$static.dragStartY);
  }
}

function $onMouseUp(this$static){
  this$static.dragging = false;
  releaseCapture(this$static.element_0);
}

function doAttachChildren_2(){
  try {
    $onAttach(this.decPanel);
  }
   finally {
    $onAttach(this.caption);
  }
}

function doDetachChildren_2(){
  try {
    $onDetach(this.decPanel);
  }
   finally {
    $onDetach(this.caption);
  }
}

function getClass_130(){
  return Lcom_google_gwt_user_client_ui_DialogBox_2_classLit;
}

function hide_2(){
  $hide_5(this);
}

function onBrowserEvent_2(event_0){
  switch ($eventGetTypeInt(($clinit_56() , event_0).type)) {
    case 4:
    case 8:
    case 64:
    case 16:
    case 32:
      if (!this.dragging && !$isCaptionEvent(this, event_0)) {
        return;
      }

  }
  $onBrowserEvent(this, event_0);
}

function onPreviewNativeEvent_0(event_0){
  var nativeEvent;
  nativeEvent = event_0.nativeEvent;
  !event_0.isCanceled && $eventGetTypeInt(($clinit_56() , event_0.nativeEvent).type) == 4 && $isCaptionEvent(this, nativeEvent) && (($clinit_56() , nativeEvent).returnValue = false , undefined);
}

function setText_2(text){
  ($clinit_56() , this.caption.element_0).innerText = text || '';
}

function show_2(){
  !this.resizeHandlerRegistration && (this.resizeHandlerRegistration = addResizeHandler($DialogBox$1(new DialogBox$1, this)));
  $show(this);
}

function DialogBox(){
}

_ = DialogBox.prototype = new DecoratedPopupPanel;
_.doAttachChildren = doAttachChildren_2;
_.doDetachChildren = doDetachChildren_2;
_.getClass$ = getClass_130;
_.hide = hide_2;
_.onBrowserEvent = onBrowserEvent_2;
_.onPreviewNativeEvent = onPreviewNativeEvent_0;
_.setText = setText_2;
_.show = show_2;
_.typeId$ = 80;
_.clientLeft_0 = 0;
_.clientTop_0 = 0;
_.dragStartX = 0;
_.dragStartY = 0;
_.dragging = false;
_.resizeHandlerRegistration = null;
_.windowWidth = 0;
function $DialogBox$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_131(){
  return Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit;
}

function onResize_0(event_0){
  this.this$0.windowWidth = event_0.width_0;
}

function DialogBox$1(){
}

_ = DialogBox$1.prototype = new Object_0;
_.getClass$ = getClass_131;
_.onResize = onResize_0;
_.typeId$ = 81;
_.this$0 = null;
function $Label(this$static){
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  this$static.element_0['className'] = 'gwt-Label';
  return this$static;
}

function $Label_0(this$static, text){
  $Label(this$static);
  ($clinit_56() , this$static.element_0).innerText = text || '';
  return this$static;
}

function addClickHandler_3(handler){
  return $addDomHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function addMouseOutHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler_2(handler){
  return $addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function getClass_132(){
  return Lcom_google_gwt_user_client_ui_Label_2_classLit;
}

function setText_3(text){
  ($clinit_56() , this.element_0).innerText = text || '';
}

function Label(){
}

_ = Label.prototype = new Widget;
_.addClickHandler = addClickHandler_3;
_.addMouseOutHandler = addMouseOutHandler_2;
_.addMouseOverHandler = addMouseOverHandler_2;
_.getClass$ = getClass_132;
_.setText = setText_3;
_.typeId$ = 82;
function $HTML(this$static){
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  this$static.element_0['className'] = 'gwt-HTML';
  return this$static;
}

function $HTML_0(this$static, html){
  $HTML(this$static);
  this$static.element_0.innerHTML = html || '';
  return this$static;
}

function $HTML_1(this$static, element){
  this$static.element_0 = element;
  return this$static;
}

function $setHTML_1(this$static, html){
  this$static.element_0.innerHTML = html || '';
}

function getClass_133(){
  return Lcom_google_gwt_user_client_ui_HTML_2_classLit;
}

function HTML(){
}

_ = HTML.prototype = new Label;
_.getClass$ = getClass_133;
_.typeId$ = 83;
function $DialogBox$CaptionImpl(this$static){
  $HTML(this$static);
  return this$static;
}

function getClass_134(){
  return Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit;
}

function DialogBox$CaptionImpl(){
}

_ = DialogBox$CaptionImpl.prototype = new HTML;
_.getClass$ = getClass_134;
_.typeId$ = 84;
function $DialogBox$MouseHandler(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_135(){
  return Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit;
}

function onMouseDown_0(event_0){
  $beginDragging(this.this$0, event_0);
}

function onMouseOut_0(event_0){
}

function onMouseOver_0(event_0){
}

function DialogBox$MouseHandler(){
}

_ = DialogBox$MouseHandler.prototype = new Object_0;
_.getClass$ = getClass_135;
_.onMouseDown = onMouseDown_0;
_.onMouseOut = onMouseOut_0;
_.onMouseOver = onMouseOver_0;
_.typeId$ = 85;
_.this$0 = null;
function $clinit_240(){
  $clinit_240 = nullMethod;
  CENTER = new DockPanel$DockLayoutConstant;
  LINE_START = new DockPanel$DockLayoutConstant;
  LINE_END = new DockPanel$DockLayoutConstant;
  EAST = new DockPanel$DockLayoutConstant;
  NORTH = new DockPanel$DockLayoutConstant;
  SOUTH = new DockPanel$DockLayoutConstant;
  WEST = new DockPanel$DockLayoutConstant;
}

function $DockPanel(this$static){
  $clinit_240();
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_266() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_270() , ALIGN_TOP);
  this$static.table['cellSpacing'] = 0;
  this$static.table['cellPadding'] = 0;
  return this$static;
}

function $add_6(this$static, widget, direction){
  var layout;
  if (direction == CENTER) {
    if (widget == this$static.center) {
      return;
    }
     else if (this$static.center) {
      throw $IllegalArgumentException_0(new IllegalArgumentException, 'Only one CENTER widget may be added');
    }
  }
  $removeFromParent(widget);
  $add_9(this$static.children_0, widget);
  direction == CENTER && (this$static.center = widget);
  layout = $DockPanel$LayoutData(new DockPanel$LayoutData, direction);
  widget.layoutData = layout;
  $setCellHorizontalAlignment(widget, this$static.horzAlign);
  $setCellVerticalAlignment(widget, this$static.vertAlign);
  $realizeTable(this$static);
  $setParent(widget, this$static);
}

function $realizeTable(this$static){
  var bodyElem, centerTd, child, colCount, dir, i, it, layout, logicalLeftCol, logicalRightCol, northRow, row, rowCount, rows, southRow, td;
  bodyElem = this$static.body_0;
  while (bodyElem.children.length > 0) {
    bodyElem.removeChild(bodyElem.children[0]);
  }
  rowCount = 1;
  colCount = 1;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children_0); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    dir = child.layoutData.direction_0;
    dir == NORTH || dir == SOUTH?++rowCount:(dir == EAST || dir == WEST || dir == LINE_START || dir == LINE_END) && ++colCount;
  }
  rows = initDim(_3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit, 223, 30, rowCount, 0);
  for (i = 0; i < rowCount; ++i) {
    rows[i] = new DockPanel$TmpRow;
    rows[i].tr = $createElement(($clinit_56() , $doc), 'tr');
    bodyElem.appendChild(rows[i].tr);
  }
  logicalLeftCol = 0;
  logicalRightCol = colCount - 1;
  northRow = 0;
  southRow = rowCount - 1;
  centerTd = null;
  for (it = $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this$static.children_0); it.index_0 < it.this$0.size - 1;) {
    child = $next_2(it);
    layout = child.layoutData;
    td = $createElement(($clinit_56() , $doc), 'td');
    layout.td = td;
    layout.td['align'] = layout.hAlign;
    layout.td.style['verticalAlign'] = layout.vAlign;
    layout.td['width'] = '';
    layout.td['height'] = '';
    if (layout.direction_0 == NORTH) {
      $insertChild(rows[northRow].tr, td, rows[northRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      ++northRow;
    }
     else if (layout.direction_0 == SOUTH) {
      $insertChild(rows[southRow].tr, td, rows[southRow].center);
      td.appendChild(child.getElement_0());
      td['colSpan'] = logicalRightCol - logicalLeftCol + 1;
      --southRow;
    }
     else if (layout.direction_0 == CENTER) {
      centerTd = td;
    }
     else if ($shouldAddToLogicalLeftOfTable(layout.direction_0)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center++);
      td.appendChild(child.getElement_0());
      td['rowSpan'] = southRow - northRow + 1;
      ++logicalLeftCol;
    }
     else if ($shouldAddToLogicalRightOfTable(layout.direction_0)) {
      row = rows[northRow];
      $insertChild(row.tr, td, row.center);
      td.appendChild(child.getElement_0());
      td['rowSpan'] = southRow - northRow + 1;
      --logicalRightCol;
    }
  }
  if (this$static.center) {
    row = rows[northRow];
    $insertChild(row.tr, centerTd, row.center);
    centerTd.appendChild(this$static.center.getElement_0());
  }
}

function $remove_3(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  if (removed) {
    w == this$static.center && (this$static.center = null);
    $realizeTable(this$static);
  }
  return removed;
}

function $setCellHorizontalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.hAlign = align.textAlignString;
  !!data.td && (data.td['align'] = align.textAlignString , undefined);
}

function $setCellVerticalAlignment(w, align){
  var data;
  data = w.layoutData;
  data.vAlign = align.verticalAlignString;
  !!data.td && (data.td.style['verticalAlign'] = align.verticalAlignString , undefined);
}

function $shouldAddToLogicalLeftOfTable(widgetDirection){
  if (widgetDirection == LINE_START) {
    return true;
  }
  return widgetDirection == WEST;
}

function $shouldAddToLogicalRightOfTable(widgetDirection){
  if (widgetDirection == LINE_END) {
    return true;
  }
  return widgetDirection == EAST;
}

function getClass_136(){
  return Lcom_google_gwt_user_client_ui_DockPanel_2_classLit;
}

function remove_6(w){
  return $remove_3(this, w);
}

function DockPanel(){
}

_ = DockPanel.prototype = new CellPanel;
_.getClass$ = getClass_136;
_.remove = remove_6;
_.typeId$ = 86;
_.center = null;
var CENTER, EAST, LINE_END, LINE_START, NORTH, SOUTH, WEST;
function getClass_137(){
  return Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit;
}

function DockPanel$DockLayoutConstant(){
}

_ = DockPanel$DockLayoutConstant.prototype = new Object_0;
_.getClass$ = getClass_137;
_.typeId$ = 0;
function $DockPanel$LayoutData(this$static, dir){
  this$static.hAlign = ($clinit_266() , ALIGN_DEFAULT).textAlignString;
  this$static.vAlign = ($clinit_270() , ALIGN_TOP).verticalAlignString;
  this$static.direction_0 = dir;
  return this$static;
}

function getClass_138(){
  return Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit;
}

function DockPanel$LayoutData(){
}

_ = DockPanel$LayoutData.prototype = new Object_0;
_.getClass$ = getClass_138;
_.typeId$ = 0;
_.direction_0 = null;
_.td = null;
function getClass_139(){
  return Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit;
}

function DockPanel$TmpRow(){
}

_ = DockPanel$TmpRow.prototype = new Object_0;
_.getClass$ = getClass_139;
_.typeId$ = 87;
_.center = 0;
_.tr = null;
function addChangeHandler(handler){
  return $addDomHandler(this, handler, ($clinit_93() , $clinit_93() , TYPE_1));
}

function getClass_140(){
  return Lcom_google_gwt_user_client_ui_FileUpload_2_classLit;
}

function getFilename(){
  return this.element_0.value;
}

function getName_0(){
  return this.element_0.name;
}

function onBrowserEvent_3(event_0){
  $onBrowserEvent(this, event_0);
}

function setEnabled_1(enabled){
  this.element_0['disabled'] = !enabled;
}

function setName(name_0){
  this.element_0.name = name_0;
}

function FileUpload(){
}

_ = FileUpload.prototype = new Widget;
_.addChangeHandler = addChangeHandler;
_.getClass$ = getClass_140;
_.getFilename = getFilename;
_.getName = getName_0;
_.onBrowserEvent = onBrowserEvent_3;
_.setEnabled = setEnabled_1;
_.setName = setName;
_.typeId$ = 88;
function $HTMLTable(this$static){
  this$static.widgetMap = $ElementMapperImpl(new ElementMapperImpl);
  this$static.tableElem = $createElement(($clinit_56() , $doc), 'table');
  this$static.bodyElem = $createElement($doc, 'tbody');
  this$static.tableElem.appendChild(this$static.bodyElem);
  this$static.element_0 = this$static.tableElem;
  return this$static;
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.getCellCount(row);
  if (cellSize <= column) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this$static.getCellCount(row));
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.getRowCount();
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $clear_0(this$static, clearInnerHTML){
  var col, row, td;
  for (row = 0; row < this$static.bodyElem.rows.length; ++row) {
    for (col = 0; col < ($checkRowBounds(this$static, row) , this$static.bodyElem.rows[row].cells.length); ++col) {
      td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[col];
      $internalClearCell(this$static, td, clearInnerHTML);
    }
  }
}

function $getText_0(this$static, row, column){
  var e;
  $checkCellBounds(this$static, row, column);
  e = $getElement_1(this$static.cellFormatter, row, column);
  return ($clinit_56() , e).innerText;
}

function $getWidget_0(this$static, row, column){
  $checkCellBounds(this$static, row, column);
  return $getWidgetImpl(this$static, row, column);
}

function $getWidgetImpl(this$static, row, column){
  var child, e;
  e = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
  child = $getFirstChildElement(($clinit_56() , e));
  if (!child) {
    return null;
  }
   else {
    return dynamicCast($get_1(this$static.widgetMap, child), 33);
  }
}

function $insertCell(this$static, row, column){
  var td, tr;
  tr = this$static.bodyElem.rows[row];
  td = this$static.createCell();
  column >= tr.children.length?tr.appendChild(td):tr.insertBefore(td, tr.children[column]);
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(($clinit_56() , td));
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_1(this$static.widgetMap, maybeChild), 33));
  if (widget) {
    $remove_4(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function $remove_4(this$static, widget){
  var elem, parent_0;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.getElement_0();
    (parent_0 = ($clinit_56() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0).removeChild(elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount, td;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    td = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column];
    $internalClearCell(this$static, td, false);
  }
  this$static.bodyElem.removeChild(this$static.bodyElem.rows[row]);
}

function $setColumnFormatter(this$static, formatter){
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setHTML_2(this$static, row, column, html){
  var td, td_0;
  this$static.prepareCell(row, column);
  td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, html == null) , td_0);
  html != null && (td.innerHTML = html || '' , undefined);
}

function $setWidget_2(this$static, row, column, widget){
  var td, td_0;
  this$static.prepareCell(row, column);
  if (widget) {
    $removeFromParent(widget);
    td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[row].cells[column] , $internalClearCell(this$static, td_0, true) , td_0);
    $put(this$static.widgetMap, widget);
    td.appendChild(widget.getElement_0());
    $setParent(widget, this$static);
  }
}

function addClickHandler_4(handler){
  return $addDomHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function createCell(){
  return $createElement(($clinit_56() , $doc), 'td');
}

function getClass_141(){
  return Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit;
}

function iterator_3(){
  return $HTMLTable$1(new HTMLTable$1, this);
}

function remove_7(widget){
  return $remove_4(this, widget);
}

function HTMLTable(){
}

_ = HTMLTable.prototype = new Panel;
_.addClickHandler = addClickHandler_4;
_.createCell = createCell;
_.getClass$ = getClass_141;
_.iterator_0 = iterator_3;
_.remove = remove_7;
_.typeId$ = 89;
_.bodyElem = null;
_.cellFormatter = null;
_.columnFormatter = null;
_.tableElem = null;
function $FlexTable(this$static){
  $HTMLTable(this$static);
  this$static.cellFormatter = $FlexTable$FlexCellFormatter(new FlexTable$FlexCellFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  return this$static;
}

function $prepareRow(this$static, row){
  var i, rowCount, tr;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a row with a negative index: ' + row);
  }
  rowCount = this$static.bodyElem.rows.length;
  for (i = rowCount; i <= row; ++i) {
    i != this$static.bodyElem.rows.length && $checkRowBounds(this$static, i);
    tr = $createElement(($clinit_56() , $doc), 'tr');
    $insertChild(this$static.bodyElem, tr, i);
  }
}

function addCells(table, row, num){
  var rowElem = table.rows[row];
  for (var i = 0; i < num; i++) {
    var cell = $doc.createElement('td');
    rowElem.appendChild(cell);
  }
}

function getCellCount(row){
  return $checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length;
}

function getClass_142(){
  return Lcom_google_gwt_user_client_ui_FlexTable_2_classLit;
}

function getRowCount(){
  return this.bodyElem.rows.length;
}

function prepareCell(row, column){
  var cellCount, required;
  $prepareRow(this, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot create a column with a negative index: ' + column);
  }
  cellCount = ($checkRowBounds(this, row) , this.bodyElem.rows[row].cells.length);
  required = column + 1 - cellCount;
  required > 0 && addCells(this.bodyElem, row, required);
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable;
_.getCellCount = getCellCount;
_.getClass$ = getClass_142;
_.getRowCount = getRowCount;
_.prepareCell = prepareCell;
_.typeId$ = 90;
function $HTMLTable$CellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $addStyleName_1(this$static, row, column, styleName){
  var td;
  this$static.this$0.prepareCell(row, column);
  td = this$static.this$0.bodyElem.rows[row].cells[column];
  setStyleName(td, styleName, true);
}

function $getElement_1(this$static, row, column){
  $checkCellBounds(this$static.this$0, row, column);
  return this$static.this$0.bodyElem.rows[row].cells[column];
}

function $setStyleName_1(this$static, row, column, styleName){
  this$static.this$0.prepareCell(row, column);
  this$static.this$0.bodyElem.rows[row].cells[column]['className'] = styleName;
}

function getClass_143(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit;
}

function HTMLTable$CellFormatter(){
}

_ = HTMLTable$CellFormatter.prototype = new Object_0;
_.getClass$ = getClass_143;
_.typeId$ = 0;
_.this$0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_144(){
  return Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter;
_.getClass$ = getClass_144;
_.typeId$ = 0;
function $FlowPanel(this$static){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  return this$static;
}

function $add_7(this$static, w){
  $add_3(this$static, w, this$static.element_0);
}

function add_6(w){
  $add_3(this, w, this.element_0);
}

function getClass_145(){
  return Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit;
}

function FlowPanel(){
}

_ = FlowPanel.prototype = new ComplexPanel;
_.add = add_6;
_.getClass$ = getClass_145;
_.typeId$ = 91;
function $FormPanel(this$static, element, createIFrame){
  this$static.element_0 = element;
  if (createIFrame) {
    this$static.frameName = 'FormPanel_' + ++formId;
    this$static.element_0.target = this$static.frameName;
    $sinkEvents(this$static, 32768);
  }
  return this$static;
}

function $fireSubmitEvent(this$static){
  var event_0;
  event_0 = ($clinit_256() , new FormPanel$SubmitEvent);
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
  return !event_0.canceled;
}

function $submit_0(this$static){
  if (!$fireSubmitEvent(this$static)) {
    return;
  }
  $submit_1(this$static.element_0, this$static.synthesizedFrame);
}

function getClass_146(){
  return Lcom_google_gwt_user_client_ui_FormPanel_2_classLit;
}

function onAttach_1(){
  var dummy;
  $onAttach(this);
  if (this.frameName != null) {
    dummy = $createElement(($clinit_56() , $doc), 'div');
    dummy.innerHTML = "<iframe src=\"javascript:''\" name='" + this.frameName + "' style='position:absolute;width:0;height:0;border:0'>" || '';
    this.synthesizedFrame = $getFirstChildElement(dummy);
    $doc.body.appendChild(this.synthesizedFrame);
  }
  $hookEvents(this.synthesizedFrame, this.element_0, this);
}

function onDetach_1(){
  $onDetach(this);
  $unhookEvents(this.synthesizedFrame, this.element_0);
  if (this.synthesizedFrame) {
    $doc.body.removeChild(this.synthesizedFrame);
    this.synthesizedFrame = null;
  }
}

function onFormSubmit(){
  return $fireSubmitEvent(this);
}

function onFrameLoad(){
  addCommand($FormPanel$1(new FormPanel$1, this));
}

function FormPanel(){
}

_ = FormPanel.prototype = new SimplePanel;
_.getClass$ = getClass_146;
_.onAttach = onAttach_1;
_.onDetach = onDetach_1;
_.onFormSubmit = onFormSubmit;
_.onFrameLoad = onFrameLoad;
_.typeId$ = 92;
_.frameName = null;
_.synthesizedFrame = null;
var formId = 0;
function $FormPanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function execute_8(){
  $fireEvent(this.this$0, $FormPanel$SubmitCompleteEvent(new FormPanel$SubmitCompleteEvent, $getContents(this.this$0.synthesizedFrame)));
}

function getClass_147(){
  return Lcom_google_gwt_user_client_ui_FormPanel$1_2_classLit;
}

function FormPanel$1(){
}

_ = FormPanel$1.prototype = new Object_0;
_.execute_0 = execute_8;
_.getClass$ = getClass_147;
_.typeId$ = 93;
_.this$0 = null;
function $FormPanel$SubmitCompleteEvent(this$static, resultsHtml){
  this$static.resultHtml = resultsHtml;
  return this$static;
}

function $dispatch_12(this$static, handler){
  handler.this$0.serverResponse = this$static.resultHtml;
  log('onSubmitComplete: ' + handler.this$0.serverResponse, null);
}

function dispatch_16(p0){
  $dispatch_12(this, dynamicCast(p0, 55));
}

function getAssociatedType_17(){
  return TYPE_16;
}

function getClass_148(){
  return Lcom_google_gwt_user_client_ui_FormPanel$SubmitCompleteEvent_2_classLit;
}

function FormPanel$SubmitCompleteEvent(){
}

_ = FormPanel$SubmitCompleteEvent.prototype = new GwtEvent;
_.dispatch = dispatch_16;
_.getAssociatedType = getAssociatedType_17;
_.getClass$ = getClass_148;
_.typeId$ = 0;
_.resultHtml = null;
var TYPE_16 = null;
function $clinit_256(){
  $clinit_256 = nullMethod;
  TYPE_17 = $GwtEvent$Type(new GwtEvent$Type);
}

function dispatch_17(p0){
  $onSubmit(dynamicCast(p0, 56), this);
}

function getAssociatedType_18(){
  return TYPE_17;
}

function getClass_149(){
  return Lcom_google_gwt_user_client_ui_FormPanel$SubmitEvent_2_classLit;
}

function FormPanel$SubmitEvent(){
}

_ = FormPanel$SubmitEvent.prototype = new GwtEvent;
_.dispatch = dispatch_17;
_.getAssociatedType = getAssociatedType_18;
_.getClass$ = getClass_149;
_.typeId$ = 0;
_.canceled = false;
var TYPE_17;
function $Grid_0(this$static, rows, columns){
  $HTMLTable(this$static);
  this$static.cellFormatter = $HTMLTable$CellFormatter(new HTMLTable$CellFormatter, this$static);
  $setColumnFormatter(this$static, $HTMLTable$ColumnFormatter(new HTMLTable$ColumnFormatter, this$static));
  $resizeColumns(this$static, columns);
  $resizeRows(this$static, rows);
  return this$static;
}

function $prepareRow_0(this$static, row){
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, td_0;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns - 1; j >= columns; --j) {
        $checkCellBounds(this$static, i, j);
        td = (td_0 = this$static.cellFormatter.this$0.bodyElem.rows[i].cells[j] , $internalClearCell(this$static, td_0, false) , td_0);
        tr = this$static.bodyElem.rows[i];
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; ++i) {
      for (j = this$static.numColumns; j < columns; ++j) {
        $insertCell(this$static, i, j);
      }
    }
  }
  this$static.numColumns = columns;
}

function $resizeRows(this$static, rows){
  if (this$static.numRows == rows) {
    return;
  }
  if (rows < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot set number of rows to ' + rows);
  }
  if (this$static.numRows < rows) {
    addRows(this$static.bodyElem, rows - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows;
  }
   else {
    while (this$static.numRows > rows) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function addRows(table, rows, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

function createCell_0(){
  var td;
  td = $createElement(($clinit_56() , $doc), 'td');
  td.innerHTML = '&nbsp;';
  return td;
}

function getCellCount_0(row){
  return this.numColumns;
}

function getClass_150(){
  return Lcom_google_gwt_user_client_ui_Grid_2_classLit;
}

function getRowCount_0(){
  return this.numRows;
}

function prepareCell_0(row, column){
  $prepareRow_0(this, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this.numColumns) {
    throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Column index: ' + column + ', Column size: ' + this.numColumns);
  }
}

function Grid(){
}

_ = Grid.prototype = new HTMLTable;
_.createCell = createCell_0;
_.getCellCount = getCellCount_0;
_.getClass$ = getClass_150;
_.getRowCount = getRowCount_0;
_.prepareCell = prepareCell_0;
_.typeId$ = 94;
_.numColumns = 0;
_.numRows = 0;
function $HTMLTable$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.widgetList = this$static.this$0.widgetMap.uiObjectList;
  $findNext(this$static);
  return this$static;
}

function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.size) {
    if ($get_3(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next_0(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  result = dynamicCast($get_3(this$static.widgetList, this$static.nextIndex), 33);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function getClass_151(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit;
}

function hasNext_0(){
  return this.nextIndex < this.widgetList.size;
}

function next_1(){
  return $next_0(this);
}

function remove_8(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  w = dynamicCast($get_3(this.widgetList, this.lastIndex_0), 33);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}

function HTMLTable$1(){
}

_ = HTMLTable$1.prototype = new Object_0;
_.getClass$ = getClass_151;
_.hasNext = hasNext_0;
_.next_0 = next_1;
_.remove_0 = remove_8;
_.typeId$ = 0;
_.lastIndex_0 = -1;
_.nextIndex = -1;
_.this$0 = null;
function $HTMLTable$ColumnFormatter(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $createElement(($clinit_56() , $doc), 'colgroup');
    $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    this$static.columnGroup.appendChild($createElement($doc, 'col'));
  }
}

function getClass_152(){
  return Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter(){
}

_ = HTMLTable$ColumnFormatter.prototype = new Object_0;
_.getClass$ = getClass_152;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $clinit_266(){
  $clinit_266 = nullMethod;
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'center');
  ALIGN_LEFT = $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'left');
  $HasHorizontalAlignment$HorizontalAlignmentConstant(new HasHorizontalAlignment$HorizontalAlignmentConstant, 'right');
  ALIGN_DEFAULT = ALIGN_LEFT;
}

var ALIGN_DEFAULT, ALIGN_LEFT;
function $HasHorizontalAlignment$HorizontalAlignmentConstant(this$static, textAlignString){
  this$static.textAlignString = textAlignString;
  return this$static;
}

function getClass_153(){
  return Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit;
}

function HasHorizontalAlignment$HorizontalAlignmentConstant(){
}

_ = HasHorizontalAlignment$HorizontalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_153;
_.typeId$ = 0;
_.textAlignString = null;
function $clinit_270(){
  $clinit_270 = nullMethod;
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'bottom');
  $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'middle');
  ALIGN_TOP = $HasVerticalAlignment$VerticalAlignmentConstant(new HasVerticalAlignment$VerticalAlignmentConstant, 'top');
}

var ALIGN_TOP;
function $HasVerticalAlignment$VerticalAlignmentConstant(this$static, verticalAlignString){
  this$static.verticalAlignString = verticalAlignString;
  return this$static;
}

function getClass_154(){
  return Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit;
}

function HasVerticalAlignment$VerticalAlignmentConstant(){
}

_ = HasVerticalAlignment$VerticalAlignmentConstant.prototype = new Object_0;
_.getClass$ = getClass_154;
_.typeId$ = 0;
_.verticalAlignString = null;
function $HorizontalPanel(this$static){
  $CellPanel(this$static);
  this$static.horzAlign = ($clinit_266() , ALIGN_DEFAULT);
  this$static.vertAlign = ($clinit_270() , ALIGN_TOP);
  this$static.tableRow = $createElement(($clinit_56() , $doc), 'tr');
  this$static.body_0.appendChild(this$static.tableRow);
  this$static.table['cellSpacing'] = '0';
  this$static.table['cellPadding'] = '0';
  return this$static;
}

function $add_8(this$static, w){
  var td, td_0;
  td = (td_0 = $createElement(($clinit_56() , $doc), 'td') , td_0['align'] = this$static.horzAlign.textAlignString , td_0.style['verticalAlign'] = this$static.vertAlign.verticalAlignString , td_0);
  this$static.tableRow.appendChild(td);
  $removeFromParent(w);
  $add_9(this$static.children_0, w);
  td.appendChild(w.getElement_0());
  $setParent(w, this$static);
}

function $remove_5(this$static, w){
  var removed, td, parent_0;
  td = (parent_0 = ($clinit_56() , w.getElement_0()).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0);
  removed = $remove_1(this$static, w);
  removed && this$static.tableRow.removeChild(td);
  return removed;
}

function add_7(w){
  $add_8(this, w);
}

function getClass_155(){
  return Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit;
}

function remove_9(w){
  return $remove_5(this, w);
}

function HorizontalPanel(){
}

_ = HorizontalPanel.prototype = new CellPanel;
_.add = add_7;
_.getClass$ = getClass_155;
_.remove = remove_9;
_.typeId$ = 95;
_.tableRow = null;
function $clinit_275(){
  $clinit_275 = nullMethod;
  $clearImpl(new HashMap);
}

function $Image_0(this$static, resource){
  $clinit_275();
  $Image_1(this$static, resource.url, resource.left_0, resource.top_0, resource.width_0, resource.height_0);
  return this$static;
}

function $Image_1(this$static, url, left, top_0, width, height){
  $clinit_275();
  this$static.state = $Image$ClippedState(new Image$ClippedState, this$static, url, left, top_0, width, height);
  this$static.getElement_0()['className'] = 'gwt-Image';
  return this$static;
}

function addClickHandler_5(handler){
  return $addHandler(this, handler, ($clinit_23() , $clinit_23() , TYPE));
}

function addMouseOutHandler_3(handler){
  return $addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler_3(handler){
  return $addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function getClass_156(){
  return Lcom_google_gwt_user_client_ui_Image_2_classLit;
}

function Image_0(){
}

_ = Image_0.prototype = new Widget;
_.addClickHandler = addClickHandler_5;
_.addMouseOutHandler = addMouseOutHandler_3;
_.addMouseOverHandler = addMouseOverHandler_3;
_.getClass$ = getClass_156;
_.typeId$ = 96;
_.state = null;
function getClass_157(){
  return Lcom_google_gwt_user_client_ui_Image$State_2_classLit;
}

function Image$State(){
}

_ = Image$State.prototype = new Object_0;
_.getClass$ = getClass_157;
_.typeId$ = 0;
function $clinit_277(){
  $clinit_277 = nullMethod;
  $clinit_304();
  injectGlobalHandler();
}

function $Image$ClippedState(this$static, image, url, left, top_0, width, height){
  $clinit_277();
  this$static.width_0 = width;
  this$static.height_0 = height;
  this$static.url = url;
  $replaceElement_0(image, $createStructure_0(url, left, top_0, width, height));
  $sinkEvents(image, 163965);
  return this$static;
}

function getClass_158(){
  return Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit;
}

function getHeight(image){
  return this.height_0;
}

function getUrl(image){
  return this.url;
}

function getWidth(image){
  return this.width_0;
}

function setUrl(image, url){
  image.state = $Image$UnclippedState_0(new Image$UnclippedState, image, url);
}

function Image$ClippedState(){
}

_ = Image$ClippedState.prototype = new Image$State;
_.getClass$ = getClass_158;
_.getHeight = getHeight;
_.getUrl = getUrl;
_.getWidth = getWidth;
_.setUrl = setUrl;
_.typeId$ = 0;
_.height_0 = 0;
_.url = null;
_.width_0 = 0;
function $Image$UnclippedState(this$static, image){
  $replaceElement_0(image, $createElement(($clinit_56() , $doc), 'img'));
  sinkEvents_0(image.element_0, 32768);
  $sinkEvents(image, 229501);
  return this$static;
}

function $Image$UnclippedState_0(this$static, image, url){
  $Image$UnclippedState(this$static, image);
  setImgSrc(($clinit_56() , image.element_0), url);
  return this$static;
}

function getClass_159(){
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}

function getHeight_0(image){
  return image.getElement_0().height;
}

function getUrl_0(image){
  return getImgSrc(($clinit_56() , image.element_0));
}

function getWidth_0(image){
  return image.getElement_0().width;
}

function setUrl_0(image, url){
  setImgSrc(($clinit_56() , image.element_0), url);
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState.prototype = new Image$State;
_.getClass$ = getClass_159;
_.getHeight = getHeight_0;
_.getUrl = getUrl_0;
_.getWidth = getWidth_0;
_.setUrl = setUrl_0;
_.typeId$ = 0;
function $onResize(){
  var height, width, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_70());
  null.nullMethod(0 + ($clinit_81() , 'px'));
  null.nullMethod('0px');
  width = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width > winWidth?width:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_70());
}

function getClass_160(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit;
}

function onResize_1(event_0){
  $onResize();
}

function PopupPanel$1(){
}

_ = PopupPanel$1.prototype = new Object_0;
_.getClass$ = getClass_160;
_.onResize = onResize_1;
_.typeId$ = 97;
function $PopupPanel$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_161(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit;
}

function PopupPanel$3(){
}

_ = PopupPanel$3.prototype = new Object_0;
_.getClass$ = getClass_161;
_.typeId$ = 98;
_.this$0 = null;
function $PopupPanel$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onValueChange(this$static){
  this$static.this$0.autoHideOnHistoryEvents && this$static.this$0.hide();
}

function getClass_162(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit;
}

function PopupPanel$4(){
}

_ = PopupPanel$4.prototype = new Object_0;
_.getClass$ = getClass_162;
_.typeId$ = 99;
_.this$0 = null;
function $clinit_285(){
  $clinit_285 = nullMethod;
  CENTER_0 = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'CENTER', 0);
  ONE_WAY_CORNER = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ONE_WAY_CORNER', 1);
  ROLL_DOWN = $PopupPanel$AnimationType(new PopupPanel$AnimationType, 'ROLL_DOWN', 2);
}

function $PopupPanel$AnimationType(this$static, enum$name, enum$ordinal){
  $clinit_285();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_163(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit;
}

function values_3(){
  $clinit_285();
  return initValues(_3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit, 224, 31, [CENTER_0, ONE_WAY_CORNER, ROLL_DOWN]);
}

function PopupPanel$AnimationType(){
}

_ = PopupPanel$AnimationType.prototype = new Enum;
_.getClass$ = getClass_163;
_.typeId$ = 100;
var CENTER_0, ONE_WAY_CORNER, ROLL_DOWN;
function $PopupPanel$ResizeAnimation(this$static, panel){
  this$static.curPanel = panel;
  return this$static;
}

function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $doc.body.appendChild(this$static.curPanel.glass);
      $onShow(this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $doc.body.removeChild(this$static.curPanel.glass);
    $onHide(this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    $remove_2(($clinit_288() , get_0(null)), this$static.curPanel);
    $onHide(this$static.curPanel.element_0);
  }
  this$static.curPanel.element_0.style['clip'] = 'rect(auto, auto, auto, auto)';
  this$static.curPanel.element_0.style['overflow'] = 'visible';
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    this$static.curPanel.element_0.style['position'] = 'absolute';
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_4(($clinit_288() , get_0(null)), this$static.curPanel);
    $onShow(this$static.curPanel.element_0);
  }
   else {
    $remove_2(($clinit_288() , get_0(null)), this$static.curPanel);
    $onHide(this$static.curPanel.element_0);
  }
  this$static.curPanel.element_0.style['overflow'] = 'visible';
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width;
  !this$static.showing && (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = ~~Math.max(Math.min(progress * this$static.offsetHeight_0, 2147483647), -2147483648);
  width = ~~Math.max(Math.min(progress * this$static.offsetWidth_0, 2147483647), -2147483648);
  switch (this$static.curPanel.animType.ordinal) {
    case 2:
      right = this$static.offsetWidth_0;
      bottom = height;
      break;
    case 0:
      top_0 = this$static.offsetHeight_0 - height >> 1;
      left = this$static.offsetWidth_0 - width >> 1;
      right = left + width;
      bottom = top_0 + height;
      break;
    case 1:
      right = left + width;
      bottom = top_0 + height;
  }
  this$static.curPanel.element_0.style['clip'] = 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)';
}

function $setState_0(this$static, showing){
  var animate;
  $cancel(this$static);
  animate = this$static.curPanel.isAnimationEnabled;
  this$static.curPanel.animType != ($clinit_285() , CENTER_0) && !showing && (animate = false);
  this$static.showing = showing;
  if (animate) {
    if (showing) {
      $maybeShowGlass(this$static);
      this$static.curPanel.element_0.style['position'] = 'absolute';
      this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
      this$static.curPanel.element_0.style['clip'] = 'rect(0px, 0px, 0px, 0px)';
      $add_4(($clinit_288() , get_0(null)), this$static.curPanel);
      $onShow(this$static.curPanel.element_0);
    }
    addCommand($PopupPanel$ResizeAnimation$1(new PopupPanel$ResizeAnimation$1, this$static));
  }
   else {
    $onInstantaneousRun(this$static);
  }
}

function getClass_164(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit;
}

function PopupPanel$ResizeAnimation(){
}

_ = PopupPanel$ResizeAnimation.prototype = new Animation;
_.getClass$ = getClass_164;
_.typeId$ = 101;
_.curPanel = null;
_.glassShowing = false;
_.offsetHeight_0 = 0;
_.offsetWidth_0 = -1;
_.resizeRegistration = null;
_.showing = false;
function $PopupPanel$ResizeAnimation$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function execute_9(){
  $run(this.this$1, 200, (new Date).getTime());
}

function getClass_165(){
  return Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit;
}

function PopupPanel$ResizeAnimation$1(){
}

_ = PopupPanel$ResizeAnimation$1.prototype = new Object_0;
_.execute_0 = execute_9;
_.getClass$ = getClass_165;
_.typeId$ = 102;
_.this$1 = null;
function $clinit_288(){
  $clinit_288 = nullMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = $HashMap(new HashMap);
  widgetsToDetach = $HashSet(new HashSet);
}

function $RootPanel(this$static, elem){
  $clinit_288();
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element_0 = elem;
  $onAttach(this$static);
  return this$static;
}

function detachNow(widget){
  $clinit_288();
  try {
    widget.onDetach();
  }
   finally {
    $remove_11(widgetsToDetach.map, widget) != null;
  }
}

function detachWidgets(){
  $clinit_288();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $clearImpl(widgetsToDetach.map);
    $clearImpl(rootPanels);
  }
}

function get_0(id){
  $clinit_288();
  var elem, rp;
  rp = dynamicCast($get_2(rootPanels, id), 57);
  elem = null;
  if (id != null) {
    if (!(elem = $doc.getElementById(id))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element_0 == elem) {
      return rp;
    }
  }
  rootPanels.size == 0 && addCloseHandler(new RootPanel$2);
  !elem?(rp = $RootPanel$DefaultRootPanel(new RootPanel$DefaultRootPanel)):(rp = $RootPanel(new RootPanel, elem));
  $put_0(rootPanels, id, rp);
  $add_16(widgetsToDetach, rp);
  return rp;
}

function getClass_166(){
  return Lcom_google_gwt_user_client_ui_RootPanel_2_classLit;
}

function RootPanel(){
}

_ = RootPanel.prototype = new AbsolutePanel;
_.getClass$ = getClass_166;
_.typeId$ = 103;
var maybeDetachCommand, rootPanels, widgetsToDetach;
function execute_10(w){
  w.isAttached() && w.onDetach();
}

function getClass_167(){
  return Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit;
}

function RootPanel$1(){
}

_ = RootPanel$1.prototype = new Object_0;
_.execute_1 = execute_10;
_.getClass$ = getClass_167;
_.typeId$ = 0;
function getClass_168(){
  return Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit;
}

function onClose_0(closeEvent){
  detachWidgets();
}

function RootPanel$2(){
}

_ = RootPanel$2.prototype = new Object_0;
_.getClass$ = getClass_168;
_.onClose = onClose_0;
_.typeId$ = 104;
function $clinit_291(){
  $clinit_291 = nullMethod;
  $clinit_288();
}

function $RootPanel$DefaultRootPanel(this$static){
  $clinit_291();
  $RootPanel(this$static, $doc.body);
  return this$static;
}

function getClass_169(){
  return Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit;
}

function setWidgetPositionImpl_0(w, left, top_0){
  left -= $getBodyOffsetLeft(($clinit_56() , $doc));
  top_0 -= $getBodyOffsetTop($doc);
  $setWidgetPositionImpl(w, left, top_0);
}

function RootPanel$DefaultRootPanel(){
}

_ = RootPanel$DefaultRootPanel.prototype = new RootPanel;
_.getClass$ = getClass_169;
_.setWidgetPositionImpl = setWidgetPositionImpl_0;
_.typeId$ = 105;
function $SimplePanel$1(this$static, this$0){
  this$static.this$0 = this$0;
  this$static.hasElement = !!this$static.this$0.widget;
  return this$static;
}

function $next_1(this$static){
  if (!this$static.hasElement || !this$static.this$0.widget) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$0.widget;
}

function getClass_170(){
  return Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit;
}

function hasNext_1(){
  return this.hasElement;
}

function next_2(){
  return $next_1(this);
}

function remove_10(){
  !!this.returned && this.this$0.remove(this.returned);
}

function SimplePanel$1(){
}

_ = SimplePanel$1.prototype = new Object_0;
_.getClass$ = getClass_170;
_.hasNext = hasNext_1;
_.next_0 = next_2;
_.remove_0 = remove_10;
_.typeId$ = 0;
_.returned = null;
_.this$0 = null;
function $WidgetCollection(this$static, parent_0){
  this$static.parent_0 = parent_0;
  this$static.array = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 226, 33, 4, 0);
  return this$static;
}

function $add_9(this$static, w){
  $insert_0(this$static, w, this$static.size);
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert_0(this$static, w, beforeIndex){
  var i, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  if (this$static.size == this$static.array.length) {
    newArray = initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 226, 33, this$static.array.length * 2, 0);
    for (i = 0; i < this$static.array.length; ++i) {
      setCheck(newArray, i, this$static.array[i]);
    }
    this$static.array = newArray;
  }
  ++this$static.size;
  for (i = this$static.size - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_6(this$static, index){
  var i;
  if (index < 0 || index >= this$static.size) {
    throw $IndexOutOfBoundsException(new IndexOutOfBoundsException);
  }
  --this$static.size;
  for (i = index; i < this$static.size; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size, null);
}

function $remove_7(this$static, w){
  var index;
  index = $indexOf(this$static, w);
  if (index == -1) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  $remove_6(this$static, index);
}

function getClass_171(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit;
}

function iterator_4(){
  return $WidgetCollection$WidgetIterator(new WidgetCollection$WidgetIterator, this);
}

function WidgetCollection(){
}

_ = WidgetCollection.prototype = new Object_0;
_.getClass$ = getClass_171;
_.iterator_0 = iterator_4;
_.typeId$ = 0;
_.array = null;
_.parent_0 = null;
_.size = 0;
function $WidgetCollection$WidgetIterator(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $next_2(this$static){
  if (this$static.index_0 >= this$static.this$0.size) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.array[++this$static.index_0];
}

function getClass_172(){
  return Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit;
}

function hasNext_2(){
  return this.index_0 < this.this$0.size - 1;
}

function next_3(){
  return $next_2(this);
}

function remove_11(){
  if (this.index_0 < 0 || this.index_0 >= this.this$0.size) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this.this$0.parent_0.remove(this.this$0.array[this.index_0--]);
}

function WidgetCollection$WidgetIterator(){
}

_ = WidgetCollection$WidgetIterator.prototype = new Object_0;
_.getClass$ = getClass_172;
_.hasNext = hasNext_2;
_.next_0 = next_3;
_.remove_0 = remove_11;
_.typeId$ = 0;
_.index_0 = -1;
_.this$0 = null;
function $clinit_304(){
  var s, i;
  $clinit_304 = nullMethod;
  moduleBaseUrlProtocol = $indexOf_0((s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':''), 'https') == 0?'https://':'http://';
  isIE6 = isIE6_0();
}

function $createStructure_0(url, left, top_0, width, height){
  var clipper, img, tmp, tmp_0;
  if (!isIE6) {
    return tmp = $createElement(($clinit_56() , $doc), 'span') , tmp.innerHTML = $getHTML_1(url, left, top_0, width, height) || '' , $getFirstChildElement(tmp);
  }
  clipper = (tmp_0 = $createElement(($clinit_56() , $doc), 'span') , tmp_0.innerHTML = $getHTML_1(url, left, top_0, width, height) || '' , $getFirstChildElement(tmp_0));
  img = $getFirstChildElement(clipper);
  $maybeInitializeEventSystem();
  $sinkEventsImpl(img, 32768);
  return clipper;
}

function $getHTML_1(url, left, top_0, width, height){
  var clippedImgHtml, clipperStyle, imgStyle, style;
  if (!isIE6) {
    return style = 'width: ' + width + 'px; height: ' + height + 'px; background: url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px' , "<img src='" + $moduleBase + "clear.cache.gif' style='" + style + "' border='0'>";
  }
  clipperStyle = 'overflow: hidden; width: ' + width + 'px; height: ' + height + 'px; padding: 0px; zoom: 1';
  imgStyle = "filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + url + "',sizingMethod='crop'); margin-left: " + -left + 'px; margin-top: ' + -top_0 + 'px; border: none';
  clippedImgHtml = '<gwt:clipper style="' + clipperStyle + '"><img src=\'' + moduleBaseUrlProtocol + "' onerror='if(window.__gwt_transparentImgHandler)window.__gwt_transparentImgHandler(this);else this.src=\"" + $moduleBase + 'clear.cache.gif"\' style="' + imgStyle + '" width=' + (left + width) + ' height=' + (top_0 + height) + " border='0'><\/gwt:clipper>";
  return clippedImgHtml;
}

function injectGlobalHandler(){
  $clinit_304();
  $wnd.__gwt_transparentImgHandler = function(elem){
    elem.onerror = null;
    setImgSrc(($clinit_56() , elem), $moduleBase + 'clear.cache.gif');
  }
  ;
}

function isIE6_0(){
  function makeVersion(result){
    return parseInt(result[1]) * 1000 + parseInt(result[2]);
  }

  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('msie') != -1) {
    var result_0 = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
    if (result_0 && result_0.length == 3) {
      var v = makeVersion(result_0);
      if (v < 7000) {
        return true;
      }
    }
  }
  return false;
}

var isIE6, moduleBaseUrlProtocol;
function $createFocusable(){
  var e;
  e = $createElement(($clinit_56() , $doc), 'div');
  e.tabIndex = 0;
  return e;
}

function $focus_0(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function $getContents(iframe){
  try {
    if (!iframe.contentWindow || !iframe.contentWindow.document)
      return null;
    return iframe.contentWindow.document.body.innerHTML;
  }
   catch (e) {
    return null;
  }
}

function $setEncoding_0(form, encoding){
  form.enctype = encoding;
  form.encoding = encoding;
}

function $submit_1(form, iframe){
  iframe && (iframe.__formAction = form.action);
  form.submit();
}

function $hookEvents(iframe, form, listener){
  iframe && (iframe.onreadystatechange = $entry(function(){
    if (!iframe.__formAction)
      return;
    iframe.readyState == 'complete' && listener.onFrameLoad();
  }
  ));
  form.onsubmit = $entry(function(){
    iframe && (iframe.__formAction = form.action);
    return listener.onFormSubmit();
  }
  );
}

function $unhookEvents(iframe, form){
  iframe && (iframe.onreadystatechange = null);
  form.onsubmit = null;
}

function $getStyleElement_1(popup){
  var parent_0;
  return parent_0 = ($clinit_56() , popup).parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0;
}

function $onHide(popup){
  var frame = popup.__frame;
  if (frame) {
    frame.parentElement.removeChild(frame);
    frame.__popup = null;
    popup.__frame = null;
  }
}

function $onShow(popup){
  var frame = $doc.createElement('iframe');
  frame.src = "javascript:''";
  frame.scrolling = 'no';
  frame.frameBorder = 0;
  popup.__frame = frame;
  frame.__popup = popup;
  var style = frame.style;
  style.position = 'absolute';
  style.filter = 'alpha(opacity=0)';
  style.visibility = popup.currentStyle.visibility;
  style.border = 0;
  style.padding = 0;
  style.margin = 0;
  style.left = popup.offsetLeft;
  style.top = popup.offsetTop;
  style.width = popup.offsetWidth;
  style.height = popup.offsetHeight;
  style.zIndex = popup.currentStyle.zIndex;
  style.setExpression('left', 'this.__popup.offsetLeft');
  style.setExpression('top', 'this.__popup.offsetTop');
  style.setExpression('width', 'this.__popup.offsetWidth');
  style.setExpression('height', 'this.__popup.offsetHeight');
  style.setExpression('zIndex', 'this.__popup.currentStyle.zIndex');
  popup.parentElement.insertBefore(frame, popup);
}

function $setVisible_2(popup, visible){
  popup.__frame && (popup.__frame.style.visibility = visible?'visible':'hidden');
}

function $ProgressBar(this$static){
  this$static.minProgress = 0;
  this$static.maxProgress = 100;
  this$static.curProgress = 0;
  this$static.textFormatter = null;
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  this$static.element_0.style['position'] = 'relative';
  this$static.element_0['className'] = 'gwt-ProgressBar-shell';
  this$static.barElement = $createElement($doc, 'div');
  this$static.element_0.appendChild(this$static.barElement);
  this$static.barElement.style['height'] = '100%';
  this$static.barElement['className'] = 'gwt-ProgressBar-bar';
  this$static.textElement = $createElement($doc, 'div');
  this$static.element_0.appendChild(this$static.textElement);
  this$static.textElement.style['position'] = 'absolute';
  this$static.textElement.style['top'] = '0px';
  this$static.textElement['className'] = 'gwt-ProgressBar-text-firstHalf';
  $setProgress_1(this$static, 0);
  return this$static;
}

function $generateText(this$static, curProgress){
  if (this$static.textFormatter) {
    return ($clinit_56() , this$static.textFormatter.this$0.fileNameLabel.element_0).innerText + '  (' + ~~Math.max(Math.min(curProgress, 2147483647), -2147483648) + ' %)';
  }
   else {
    return ~~Math.max(Math.min(100 * $getPercent(this$static), 2147483647), -2147483648) + '%';
  }
}

function $getPercent(this$static){
  var percent;
  if (this$static.maxProgress <= this$static.minProgress) {
    return 0;
  }
  percent = (this$static.curProgress - this$static.minProgress) / (this$static.maxProgress - this$static.minProgress);
  return 0 > (1 < percent?1:percent)?0:1 < percent?1:percent;
}

function $onResize_0(this$static, width){
  var left, textWidth;
  textWidth = parseInt(this$static.textElement['offsetWidth']) || 0;
  left = ~~(width / 2) - ~~(textWidth / 2);
  this$static.textElement.style['left'] = left + 'px';
}

function $redraw(this$static){
  var width;
  if (this$static.attached) {
    width = parseInt(this$static.element_0['clientWidth']) || 0;
    parseInt(this$static.element_0['clientHeight']) || 0;
    $onResize_0(this$static, width);
  }
}

function $setProgress_1(this$static, curProgress){
  var percent;
  this$static.curProgress = max_0(this$static.minProgress, min_0(this$static.maxProgress, curProgress));
  percent = ~~Math.max(Math.min(100 * $getPercent(this$static), 2147483647), -2147483648);
  this$static.barElement.style['width'] = percent + '%';
  this$static.textElement['innerHTML'] = $generateText(this$static, curProgress);
  percent < 50?(this$static.textElement['className'] = 'gwt-ProgressBar-text gwt-ProgressBar-text-firstHalf' , undefined):(this$static.textElement['className'] = 'gwt-ProgressBar-text gwt-ProgressBar-text-secondHalf' , undefined);
  $redraw(this$static);
}

function getClass_173(){
  return Lcom_google_gwt_widgetideas_client_ProgressBar_2_classLit;
}

function onLoad_2(){
  this.element_0.style['position'] = 'relative';
  $put_0(get_1().widgets, this, $ResizableWidgetCollection$ResizableWidgetInfo(new ResizableWidgetCollection$ResizableWidgetInfo, this));
  $redraw(this);
}

function onUnload_2(){
  $remove_11(get_1().widgets, this);
}

function ProgressBar(){
}

_ = ProgressBar.prototype = new Widget;
_.getClass$ = getClass_173;
_.onLoad_0 = onLoad_2;
_.onUnload = onUnload_2;
_.typeId$ = 106;
_.barElement = null;
_.curProgress = 0;
_.maxProgress = 0;
_.minProgress = 0;
_.textElement = null;
_.textFormatter = null;
function getClass_174(){
  return Lcom_google_gwt_widgetideas_client_ProgressBar$TextFormatter_2_classLit;
}

function ProgressBar$TextFormatter(){
}

_ = ProgressBar$TextFormatter.prototype = new Object_0;
_.getClass$ = getClass_174;
_.typeId$ = 0;
function $ResizableWidgetCollection(this$static){
  this$static.resizeCheckTimer = $ResizableWidgetCollection$1(new ResizableWidgetCollection$1, this$static);
  this$static.widgets = $HashMap(new HashMap);
  this$static.resizeCheckDelay = 400;
  $setResizeCheckingEnabled(this$static, true);
  return this$static;
}

function $checkWidgetSize(this$static){
  var curHeight, curWidth, entry, entry$iterator, info, widget;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this$static.widgets).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_5(entry$iterator.iter), 53);
    widget = dynamicCast(entry.getKey(), 59);
    info = dynamicCast(entry.getValue(), 60);
    curWidth = parseInt(widget.element_0['clientWidth']) || 0;
    curHeight = parseInt(widget.element_0['clientHeight']) || 0;
    $setClientSize(info, curWidth, curHeight) && curWidth > 0 && curHeight > 0 && widget.attached && $onResize_0(widget, curWidth);
  }
}

function $setResizeCheckingEnabled(this$static, enabled){
  if (enabled && !this$static.resizeCheckingEnabled) {
    this$static.resizeCheckingEnabled = true;
    !this$static.windowHandler && (this$static.windowHandler = addResizeHandler($ResizableWidgetCollection$2(new ResizableWidgetCollection$2, this$static)));
    $schedule(this$static.resizeCheckTimer, this$static.resizeCheckDelay);
  }
   else if (!enabled && this$static.resizeCheckingEnabled) {
    this$static.resizeCheckingEnabled = false;
    if (this$static.windowHandler) {
      $removeHandler(this$static.windowHandler);
      this$static.windowHandler = null;
    }
    $cancel_0(this$static.resizeCheckTimer);
  }
}

function get_1(){
  !staticCollection && (staticCollection = $ResizableWidgetCollection(new ResizableWidgetCollection));
  return staticCollection;
}

function getClass_175(){
  return Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection_2_classLit;
}

function iterator_5(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $keySet(this.widgets).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function ResizableWidgetCollection(){
}

_ = ResizableWidgetCollection.prototype = new Object_0;
_.getClass$ = getClass_175;
_.iterator_0 = iterator_5;
_.typeId$ = 0;
_.resizeCheckDelay = 400;
_.resizeCheckingEnabled = false;
_.windowHandler = null;
_.windowHeight = 0;
_.windowWidth = 0;
var staticCollection = null;
function $clinit_316(){
  $clinit_316 = nullMethod;
  $clinit_34();
}

function $ResizableWidgetCollection$1(this$static, this$0){
  $clinit_316();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_176(){
  return Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$1_2_classLit;
}

function run_3(){
  if (this.this$0.windowHeight != $getClientHeight($doc) || this.this$0.windowWidth != $getClientWidth($doc)) {
    this.this$0.windowHeight = $getClientHeight($doc);
    this.this$0.windowWidth = $getClientWidth($doc);
    $schedule(this, this.this$0.resizeCheckDelay);
    return;
  }
  $checkWidgetSize(this.this$0);
  this.this$0.resizeCheckingEnabled && $schedule(this, this.this$0.resizeCheckDelay);
}

function ResizableWidgetCollection$1(){
}

_ = ResizableWidgetCollection$1.prototype = new Timer;
_.getClass$ = getClass_176;
_.run = run_3;
_.typeId$ = 107;
_.this$0 = null;
function $ResizableWidgetCollection$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_177(){
  return Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$2_2_classLit;
}

function onResize_2(event_0){
  $checkWidgetSize(this.this$0);
}

function ResizableWidgetCollection$2(){
}

_ = ResizableWidgetCollection$2.prototype = new Object_0;
_.getClass$ = getClass_177;
_.onResize = onResize_2;
_.typeId$ = 108;
_.this$0 = null;
function $ResizableWidgetCollection$ResizableWidgetInfo(this$static, widget){
  this$static.curWidth = parseInt(widget.element_0['clientWidth']) || 0;
  this$static.curHeight = parseInt(widget.element_0['clientHeight']) || 0;
  return this$static;
}

function $setClientSize(this$static, width, height){
  if (width != this$static.curWidth || height != this$static.curHeight) {
    this$static.curWidth = width;
    this$static.curHeight = height;
    return true;
  }
   else {
    return false;
  }
}

function getClass_178(){
  return Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$ResizableWidgetInfo_2_classLit;
}

function ResizableWidgetCollection$ResizableWidgetInfo(){
}

_ = ResizableWidgetCollection$ResizableWidgetInfo.prototype = new Object_0;
_.getClass$ = getClass_178;
_.typeId$ = 109;
_.curHeight = 0;
_.curWidth = 0;
function $clearOnReadyStateChange(this$static){
  var self_0 = this$static;
  $wnd.setTimeout(function(){
    self_0.onreadystatechange = new Function;
  }
  , 0);
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function create_0(){
  if ($wnd.XMLHttpRequest) {
    return new XMLHttpRequest;
  }
   else {
    try {
      return new ActiveXObject('MSXML2.XMLHTTP.3.0');
    }
     catch (e) {
      return new ActiveXObject('Microsoft.XMLHTTP');
    }
  }
}

function $DOMException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_179(){
  return Lcom_google_gwt_xml_client_DOMException_2_classLit;
}

function DOMException(){
}

_ = DOMException.prototype = new RuntimeException;
_.getClass$ = getClass_179;
_.typeId$ = 110;
function $clinit_333(){
  $clinit_333 = nullMethod;
  impl_0 = ($clinit_347() , $clinit_347() , impl_1);
}

var impl_0;
function equals_2(o){
  if (o != null && canCast(o.typeId$, 61)) {
    return this.jsObject == dynamicCast(o, 61).jsObject;
  }
  return false;
}

function getClass_180(){
  return Lcom_google_gwt_xml_client_impl_DOMItem_2_classLit;
}

function getJsObject(){
  return this.jsObject;
}

function hashCode_4(){
  return getHashCode(this.jsObject);
}

function DOMItem(){
}

_ = DOMItem.prototype = new Object_0;
_.equals$ = equals_2;
_.getClass$ = getClass_180;
_.getJsObject = getJsObject;
_.hashCode$ = hashCode_4;
_.typeId$ = 111;
_.jsObject = null;
function $NodeImpl(this$static, jso){
  this$static.jsObject = jso;
  return this$static;
}

function build(node){
  var nodeType, out;
  if (!node) {
    return null;
  }
  nodeType = ($clinit_347() , out = node.nodeType , out == null?-1:out);
  switch (nodeType) {
    case 2:
      return $AttrImpl(new AttrImpl, node);
    case 4:
      return $CDATASectionImpl(new CDATASectionImpl, node);
    case 8:
      return $CommentImpl(new CommentImpl, node);
    case 11:
      return $DocumentFragmentImpl(new DocumentFragmentImpl, node);
    case 9:
      return $DocumentImpl(new DocumentImpl, node);
    case 1:
      return $ElementImpl(new ElementImpl, node);
    case 7:
      return $ProcessingInstructionImpl(new ProcessingInstructionImpl, node);
    case 3:
      return $TextImpl(new TextImpl, node);
    default:return $NodeImpl(new NodeImpl, node);
  }
}

function getClass_181(){
  return Lcom_google_gwt_xml_client_impl_NodeImpl_2_classLit;
}

function toString_11(){
  var jsNode;
  return $clinit_347() , jsNode = this.getJsObject() , jsNode.xml;
}

function NodeImpl(){
}

_ = NodeImpl.prototype = new DOMItem;
_.getClass$ = getClass_181;
_.toString$ = toString_11;
_.typeId$ = 112;
function $AttrImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_182(){
  return Lcom_google_gwt_xml_client_impl_AttrImpl_2_classLit;
}

function AttrImpl(){
}

_ = AttrImpl.prototype = new NodeImpl;
_.getClass$ = getClass_182;
_.typeId$ = 113;
function getClass_183(){
  return Lcom_google_gwt_xml_client_impl_CharacterDataImpl_2_classLit;
}

function CharacterDataImpl(){
}

_ = CharacterDataImpl.prototype = new NodeImpl;
_.getClass$ = getClass_183;
_.typeId$ = 114;
function $TextImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_184(){
  return Lcom_google_gwt_xml_client_impl_TextImpl_2_classLit;
}

function toString_12(){
  var b, i, x;
  b = $StringBuffer(new StringBuffer);
  x = $split(($clinit_347() , this.jsObject.data), '(?=[;&<>\'"])', -1);
  for (i = 0; i < x.length; ++i) {
    if (x[i].indexOf(';') == 0) {
      $append(b.data_0, '&semi;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else if (x[i].indexOf('&') == 0) {
      $append(b.data_0, '&amp;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else if (x[i].indexOf('"') == 0) {
      $append(b.data_0, '&quot;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else if (x[i].indexOf("'") == 0) {
      $append(b.data_0, '&apos;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else if (x[i].indexOf('<') == 0) {
      $append(b.data_0, '&lt;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else if (x[i].indexOf('>') == 0) {
      $append(b.data_0, '&gt;');
      $append_0(b, x[i].substr(1, x[i].length - 1));
    }
     else {
      $append(b.data_0, x[i]);
    }
  }
  return $toString_2(b.data_0);
}

function TextImpl(){
}

_ = TextImpl.prototype = new CharacterDataImpl;
_.getClass$ = getClass_184;
_.toString$ = toString_12;
_.typeId$ = 115;
function $CDATASectionImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_185(){
  return Lcom_google_gwt_xml_client_impl_CDATASectionImpl_2_classLit;
}

function toString_13(){
  var b;
  b = $StringBuffer_0(new StringBuffer, '<![CDATA[');
  $append_0(b, ($clinit_347() , this.jsObject.data));
  $append(b.data_0, ']]>');
  return $toString_2(b.data_0);
}

function CDATASectionImpl(){
}

_ = CDATASectionImpl.prototype = new TextImpl;
_.getClass$ = getClass_185;
_.toString$ = toString_13;
_.typeId$ = 116;
function $CommentImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_186(){
  return Lcom_google_gwt_xml_client_impl_CommentImpl_2_classLit;
}

function toString_14(){
  var b;
  b = $StringBuffer_0(new StringBuffer, '<!--');
  $append_0(b, ($clinit_347() , this.jsObject.data));
  $append(b.data_0, '-->');
  return $toString_2(b.data_0);
}

function CommentImpl(){
}

_ = CommentImpl.prototype = new CharacterDataImpl;
_.getClass$ = getClass_186;
_.toString$ = toString_14;
_.typeId$ = 117;
function $DOMParseException(this$static, contents, e){
  $DOMException(this$static, 'Failed to parse: ' + contents.substr(0, min_1(contents.length, 128) - 0));
  $initCause(this$static, e);
  return this$static;
}

function getClass_187(){
  return Lcom_google_gwt_xml_client_impl_DOMParseException_2_classLit;
}

function DOMParseException(){
}

_ = DOMParseException.prototype = new DOMException;
_.getClass$ = getClass_187;
_.typeId$ = 118;
function $DocumentFragmentImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_188(){
  return Lcom_google_gwt_xml_client_impl_DocumentFragmentImpl_2_classLit;
}

function DocumentFragmentImpl(){
}

_ = DocumentFragmentImpl.prototype = new NodeImpl;
_.getClass$ = getClass_188;
_.typeId$ = 119;
function $DocumentImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_189(){
  return Lcom_google_gwt_xml_client_impl_DocumentImpl_2_classLit;
}

function DocumentImpl(){
}

_ = DocumentImpl.prototype = new NodeImpl;
_.getClass$ = getClass_189;
_.typeId$ = 120;
function $ElementImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_190(){
  return Lcom_google_gwt_xml_client_impl_ElementImpl_2_classLit;
}

function ElementImpl(){
}

_ = ElementImpl.prototype = new NodeImpl;
_.getClass$ = getClass_190;
_.typeId$ = 121;
function $NodeListImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_191(){
  return Lcom_google_gwt_xml_client_impl_NodeListImpl_2_classLit;
}

function toString_15(){
  var b, i;
  b = $StringBuffer(new StringBuffer);
  for (i = 0; i < ($clinit_347() , this.jsObject.length); ++i) {
    $append_0(b, build(item(this.jsObject, i)).toString$());
  }
  return $toString_2(b.data_0);
}

function NodeListImpl(){
}

_ = NodeListImpl.prototype = new DOMItem;
_.getClass$ = getClass_191;
_.toString$ = toString_15;
_.typeId$ = 122;
function $ProcessingInstructionImpl(this$static, o){
  this$static.jsObject = o;
  return this$static;
}

function getClass_192(){
  return Lcom_google_gwt_xml_client_impl_ProcessingInstructionImpl_2_classLit;
}

function toString_16(){
  var jsNode;
  return $clinit_347() , jsNode = this.getJsObject() , jsNode.xml;
}

function ProcessingInstructionImpl(){
}

_ = ProcessingInstructionImpl.prototype = new NodeImpl;
_.getClass$ = getClass_192;
_.toString$ = toString_16;
_.typeId$ = 123;
function $clinit_347(){
  $clinit_347 = nullMethod;
  impl_1 = ($clinit_348() , $clinit_347() , new XMLParserImplIE6);
}

function $parse(this$static, contents){
  var $e0, e;
  try {
    return dynamicCast(build($parseImpl(this$static, contents)), 62);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 48)) {
      e = $e0;
      throw $DOMParseException(new DOMParseException, contents, e);
    }
     else 
      throw $e0;
  }
}

function getClass_193(){
  return Lcom_google_gwt_xml_client_impl_XMLParserImpl_2_classLit;
}

function item(t, index){
  $clinit_347();
  if (index >= t.length) {
    return null;
  }
  return t.item(index);
}

function XMLParserImpl(){
}

_ = XMLParserImpl.prototype = new Object_0;
_.getClass$ = getClass_193;
_.typeId$ = 0;
var impl_1;
function $clinit_348(){
  $clinit_348 = nullMethod;
  $clinit_347();
}

function $parseImpl(this$static, contents){
  var doc = this$static.createDocumentImpl();
  if (!doc.loadXML(contents)) {
    var err = doc.parseError;
    throw new Error('line ' + err.line + ', char ' + err.linepos + ':' + err.reason);
  }
   else {
    return doc;
  }
}

function createDocumentImpl(){
  var doc = selectDOMDocumentVersion();
  doc.preserveWhiteSpace = true;
  doc.setProperty('SelectionNamespaces', "xmlns:xsl='http://www.w3.org/1999/XSL/Transform'");
  doc.setProperty('SelectionLanguage', 'XPath');
  return doc;
}

function getClass_194(){
  return Lcom_google_gwt_xml_client_impl_XMLParserImplIE6_2_classLit;
}

function selectDOMDocumentVersion(){
  try {
    return new ActiveXObject('Msxml2.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('MSXML.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('MSXML3.DOMDocument');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('Microsoft.XmlDom');
  }
   catch (e) {
  }
  try {
    return new ActiveXObject('Microsoft.DOMDocument');
  }
   catch (e) {
  }
  throw new Error('XMLParserImplIE6.createDocumentImpl: Could not find appropriate version of DOMDocument.');
}

function XMLParserImplIE6(){
}

_ = XMLParserImplIE6.prototype = new XMLParserImpl;
_.createDocumentImpl = createDocumentImpl;
_.getClass$ = getClass_194;
_.typeId$ = 0;
function $BaseUploadStatus(this$static){
  this$static.cancelLabel = $Label_0(new Label, ' ');
  this$static.fileNameLabel = $Label(new Label);
  this$static.panel = $HorizontalPanel(new HorizontalPanel);
  this$static.statusLabel = $Label(new Label);
  this$static.cancelCfg = ($clinit_373() , DEFAULT_CANCEL_CFG);
  this$static.i18nStrs = new IUploadStatus_UploadStatusConstants_;
  this$static.status_0 = ($clinit_375() , UNINITIALIZED);
  $add_8(this$static.panel, this$static.cancelLabel);
  $add_8(this$static.panel, this$static.fileNameLabel);
  $add_8(this$static.panel, this$static.statusLabel);
  this$static.fileNameLabel.getStyleElement()['className'] = 'filename';
  this$static.statusLabel.getStyleElement()['className'] = 'status';
  this$static.cancelLabel.getStyleElement()['className'] = 'cancel';
  this$static.cancelLabel.getElement_0().style.display = '';
  return this$static;
}

function $setCancelConfiguration(this$static, config){
  this$static.cancelCfg = config;
}

function $setProgressWidget(this$static, progress){
  !!this$static.prg_0 && $remove_5(this$static.panel, this$static.prg_0);
  this$static.prg_0 = progress;
  $add_8(this$static.panel, this$static.prg_0);
  this$static.prg_0.setVisible(false);
}

function $setStatus(this$static, stat){
  var statusName;
  statusName = stat.name_0.toLowerCase();
  $removeStyleDependentName(this$static.statusLabel, statusName);
  $addStyleDependentName(this$static.statusLabel, statusName);
  switch (stat.ordinal) {
    case 11:
    case 6:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusQueued());
      break;
    case 8:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusSubmitting());
      break;
    case 5:
      $updateStatusPanel(this$static, true, this$static.i18nStrs.uploadStatusInProgress());
      !this$static.cancelCfg.contains_0(($clinit_374() , STOP_CURRENT)) && (this$static.cancelLabel.getElement_0().style.display = 'none' , undefined);
      break;
    case 9:
    case 7:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusSuccess());
      !this$static.cancelCfg.contains_0(($clinit_374() , REMOVE_REMOTE)) && (this$static.cancelLabel.getElement_0().style.display = 'none' , undefined);
      break;
    case 1:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusCanceling());
      break;
    case 0:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusCanceled());
      this$static.cancelCfg.contains_0(($clinit_374() , REMOVE_CANCELLED_FROM_LIST)) && $removeFromParent(this$static.getWidget());
      break;
    case 4:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusError());
      break;
    case 2:
      $updateStatusPanel(this$static, false, this$static.i18nStrs.uploadStatusDeleted());
      $removeFromParent(this$static.getWidget());
  }
  if (this$static.status_0 != stat && !!this$static.onUploadStatusChangedHandler) {
    this$static.status_0 = stat;
    $onStatusChanged(this$static.onUploadStatusChangedHandler);
  }
  this$static.status_0 = stat;
}

function $updateStatusPanel(this$static, showProgress, message){
  showProgress && !this$static.prg_0 && $setProgressWidget(this$static, $BaseUploadStatus$BasicProgressBar(new BaseUploadStatus$BasicProgressBar));
  !!this$static.prg_0 && this$static.prg_0.setVisible(showProgress);
  $setVisible(this$static.fileNameLabel, instanceOf(this$static.prg_0, 64) || !showProgress);
  $setVisible(this$static.statusLabel, !showProgress);
  ($clinit_56() , this$static.statusLabel.element_0).innerText = message || '';
  $setVisible(this$static.cancelLabel, this$static.hasCancelActions && !this$static.cancelCfg.contains_0(($clinit_374() , DISABLED)));
}

function addCancelHandler(handler){
  this.hasCancelActions = true;
  return $addDomHandler(this.cancelLabel, $BaseUploadStatus$1(new BaseUploadStatus$1, handler), ($clinit_23() , $clinit_23() , TYPE));
}

function getClass_195(){
  return Lgwtupload_client_BaseUploadStatus_2_classLit;
}

function getStatus(){
  return this.status_0;
}

function getWidget_1(){
  return this.panel;
}

function newInstance(){
  var ret;
  ret = $BaseUploadStatus(new BaseUploadStatus);
  $setCancelConfiguration(ret, this.cancelCfg);
  return ret;
}

function setError(msg){
  $setStatus(this, ($clinit_375() , ERROR));
  $wnd.alert($replaceAll(msg, '\\\\n', '\\n'));
}

function setFileName(name_0){
  ($clinit_56() , this.fileNameLabel.element_0).innerText = name_0 || '';
}

function setI18Constants(strs){
  this.i18nStrs = strs;
}

function setPercent(percent){
  $setStatus(this, this.status_0);
}

function setProgress(done, total){
  var percent;
  percent = total > 0?~~(done * 100 / total):0;
  this.setPercent(percent);
  !!this.prg_0 && instanceOf(this.prg_0, 63) && dynamicCast(this.prg_0, 63).setProgress(done, total);
}

function setStatus(stat){
  $setStatus(this, stat);
}

function setStatusChangedHandler(handler){
  this.onUploadStatusChangedHandler = handler;
}

function setVisible_3(b){
  $setVisible(this.panel, b);
}

function BaseUploadStatus(){
}

_ = BaseUploadStatus.prototype = new Object_0;
_.addCancelHandler = addCancelHandler;
_.getClass$ = getClass_195;
_.getStatus = getStatus;
_.getWidget = getWidget_1;
_.newInstance = newInstance;
_.setError = setError;
_.setFileName = setFileName;
_.setI18Constants = setI18Constants;
_.setPercent = setPercent;
_.setProgress = setProgress;
_.setStatus = setStatus;
_.setStatusChangedHandler = setStatusChangedHandler;
_.setVisible = setVisible_3;
_.typeId$ = 0;
_.hasCancelActions = false;
_.onUploadStatusChangedHandler = null;
_.prg_0 = null;
function $BaseUploadStatus$1(this$static, val$handler){
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_196(){
  return Lgwtupload_client_BaseUploadStatus$1_2_classLit;
}

function onClick_1(event_0){
  this.val$handler.onCancel();
}

function BaseUploadStatus$1(){
}

_ = BaseUploadStatus$1.prototype = new Object_0;
_.getClass$ = getClass_196;
_.onClick = onClick_1;
_.typeId$ = 124;
_.val$handler = null;
function $BaseUploadStatus$BasicProgressBar(this$static){
  this$static.children_0 = $WidgetCollection(new WidgetCollection, this$static);
  this$static.element_0 = $createElement(($clinit_56() , $doc), 'div');
  this$static.statusBar = $SimplePanel(new SimplePanel);
  this$static.statusMsg = $Label(new Label);
  this$static.element_0.style['width'] = '100px';
  this$static.element_0['className'] = 'prgbar-back';
  $add_7(this$static, this$static.statusBar);
  $add_7(this$static, this$static.statusMsg);
  this$static.statusBar.getStyleElement()['className'] = 'prgbar-done';
  this$static.statusBar.setWidth('0px');
  this$static.statusMsg.getStyleElement()['className'] = 'prgbar-msg';
  return this$static;
}

function getClass_197(){
  return Lgwtupload_client_BaseUploadStatus$BasicProgressBar_2_classLit;
}

function setProgress_0(done, total){
  var percent;
  if (!this.statusBar) {
    return;
  }
  percent = total > 0?~~(done * 100 / total):0;
  this.statusBar.setWidth(percent + 'px');
  ($clinit_56() , this.statusMsg.element_0).innerText = percent + '%' || '';
}

function BaseUploadStatus$BasicProgressBar(){
}

_ = BaseUploadStatus$BasicProgressBar.prototype = new FlowPanel;
_.getClass$ = getClass_197;
_.setProgress = setProgress_0;
_.typeId$ = 125;
function $DecoratedFileUpload(this$static, text){
  this$static.input = $DecoratedFileUpload$FileUploadWithMouseEvents(new DecoratedFileUpload$FileUploadWithMouseEvents);
  this$static.impl = ($clinit_356() , new DecoratedFileUpload$DecoratedFileUploadImplClick);
  this$static.container = $AbsolutePanel(new AbsolutePanel);
  setStyleName(this$static.container.getStyleElement(), 'DecoratedFileUpload', true);
  $initWidget(this$static, this$static.container);
  $init_1(this$static.impl, this$static.container, this$static.input);
  this$static.text_0 = text;
  return this$static;
}

function $setButton(this$static, button){
  !!this$static.button && $remove_2(this$static.container, this$static.button);
  this$static.button = button;
  $add_5(this$static.container, button, 0, 0);
  $setButton_1(this$static.impl, button);
  $resize(this$static.impl);
}

function $setText_3(this$static, text){
  this$static.text_0 = text;
  if (instanceOf(this$static.button, 65)) {
    dynamicCast(this$static.button, 65).setText(text);
    $resize(this$static.impl);
  }
}

function addChangeHandler_0(handler){
  return $addDomHandler(this.input, handler, ($clinit_93() , $clinit_93() , TYPE_1));
}

function getClass_198(){
  return Lgwtupload_client_DecoratedFileUpload_2_classLit;
}

function getFilename_0(){
  return this.input.element_0.value;
}

function getName_1(){
  return this.input.element_0.name;
}

function getWidget_2(){
  return this;
}

function onAttach_2(){
  $onAttach_0(this);
  if (!this.button) {
    this.button = $Button_0(new Button, this.text_0);
    $setButton(this, this.button);
  }
   else {
    $resize(this.impl);
  }
}

function setEnabled_2(b){
  this.input.element_0['disabled'] = !b;
  b?$removeStyleDependentName(this.container, 'disabled'):$addStyleDependentName(this.container, 'disabled');
}

function setName_0(fieldName){
  this.input.element_0.name = fieldName;
}

function setText_4(text){
  $setText_3(this, text);
}

function DecoratedFileUpload(){
}

_ = DecoratedFileUpload.prototype = new Composite;
_.addChangeHandler = addChangeHandler_0;
_.getClass$ = getClass_198;
_.getFilename = getFilename_0;
_.getName = getName_1;
_.getWidget = getWidget_2;
_.onAttach = onAttach_2;
_.setEnabled = setEnabled_2;
_.setName = setName_0;
_.setText = setText_4;
_.typeId$ = 126;
_.button = null;
_.container = null;
_.impl = null;
_.text_0 = '';
function $resize(this$static){
  var h, w;
  if (this$static.button) {
    w = this$static.button.getOffsetWidth() > 0?this$static.button.getOffsetWidth():100;
    h = this$static.button.getOffsetHeight() > 0?this$static.button.getOffsetHeight():15;
    $setSize(this$static.container, w + 'px', h + 'px');
  }
}

function getClass_199(){
  return Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl_2_classLit;
}

function DecoratedFileUpload$DecoratedFileUploadImpl(){
}

_ = DecoratedFileUpload$DecoratedFileUploadImpl.prototype = new Object_0;
_.getClass$ = getClass_199;
_.typeId$ = 0;
_.button = null;
_.container = null;
_.input = null;
function $DecoratedFileUpload$DecoratedFileUploadImpl$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_200(){
  return Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl$1_2_classLit;
}

function onMouseOver_1(event_0){
  $addStyleDependentName(this.this$1.button, 'over');
  $addStyleDependentName(this.this$1.container, 'over');
}

function DecoratedFileUpload$DecoratedFileUploadImpl$1(){
}

_ = DecoratedFileUpload$DecoratedFileUploadImpl$1.prototype = new Object_0;
_.getClass$ = getClass_200;
_.onMouseOver = onMouseOver_1;
_.typeId$ = 127;
_.this$1 = null;
function $DecoratedFileUpload$DecoratedFileUploadImpl$2(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_201(){
  return Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl$2_2_classLit;
}

function onMouseOut_1(event_0){
  $removeStyleDependentName(this.this$1.button, 'over');
  $removeStyleDependentName(this.this$1.container, 'over');
}

function DecoratedFileUpload$DecoratedFileUploadImpl$2(){
}

_ = DecoratedFileUpload$DecoratedFileUploadImpl$2.prototype = new Object_0;
_.getClass$ = getClass_201;
_.onMouseOut = onMouseOut_1;
_.typeId$ = 128;
_.this$1 = null;
function $clinit_356(){
  $clinit_356 = nullMethod;
  clickHandlerCache = $HashMap(new HashMap);
}

function $init_1(this$static, container, input){
  var beforeIndex;
  this$static.container = container;
  this$static.input = input;
  $removeFromParent(input);
  beforeIndex = container.children_0.size;
  container.setWidgetPositionImpl(input, 500, 500);
  $insert(container, input, container.element_0, beforeIndex, true);
  container.element_0.style['cssFloat'] = 'left';
  container.element_0.style['display'] = 'inline';
}

function $setButton_1(this$static, widget){
  var clickRegistration;
  this$static.button = widget;
  instanceOf(this$static.button, 66) && dynamicCast(this$static.button, 66).addMouseOverHandler($DecoratedFileUpload$DecoratedFileUploadImpl$1(new DecoratedFileUpload$DecoratedFileUploadImpl$1, this$static));
  instanceOf(this$static.button, 67) && dynamicCast(this$static.button, 67).addMouseOutHandler($DecoratedFileUpload$DecoratedFileUploadImpl$2(new DecoratedFileUpload$DecoratedFileUploadImpl$2, this$static));
  clickRegistration = dynamicCast($get_2(clickHandlerCache, widget), 68);
  !!clickRegistration && clickRegistration.removeHandler();
  if (this$static.button) {
    if (instanceOf(this$static.button, 69)) {
      clickRegistration = dynamicCast(this$static.button, 69).addClickHandler($DecoratedFileUpload$DecoratedFileUploadImplClick$1(new DecoratedFileUpload$DecoratedFileUploadImplClick$1, this$static));
      $put_0(clickHandlerCache, widget, clickRegistration);
    }
  }
}

function getClass_202(){
  return Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImplClick_2_classLit;
}

function DecoratedFileUpload$DecoratedFileUploadImplClick(){
}

_ = DecoratedFileUpload$DecoratedFileUploadImplClick.prototype = new DecoratedFileUpload$DecoratedFileUploadImpl;
_.getClass$ = getClass_202;
_.typeId$ = 0;
var clickHandlerCache;
function $DecoratedFileUpload$DecoratedFileUploadImplClick$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_203(){
  return Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImplClick$1_2_classLit;
}

function onClick_2(event_0){
  $clinit_356();
  this.this$1.input.element_0.click();
}

function DecoratedFileUpload$DecoratedFileUploadImplClick$1(){
}

_ = DecoratedFileUpload$DecoratedFileUploadImplClick$1.prototype = new Object_0;
_.getClass$ = getClass_203;
_.onClick = onClick_2;
_.typeId$ = 129;
_.this$1 = null;
function $DecoratedFileUpload$FileUploadWithMouseEvents(this$static){
  var e;
  this$static.element_0 = (e = ($clinit_56() , $doc).createElement('INPUT') , e.type = 'file' , e);
  this$static.element_0['className'] = 'gwt-FileUpload';
  return this$static;
}

function addChangeHandler_1(handler){
  return $addDomHandler(this, handler, ($clinit_93() , $clinit_93() , TYPE_1));
}

function addMouseOutHandler_4(handler){
  return $addDomHandler(this, handler, ($clinit_131() , $clinit_131() , TYPE_8));
}

function addMouseOverHandler_4(handler){
  return $addDomHandler(this, handler, ($clinit_133() , $clinit_133() , TYPE_9));
}

function getClass_204(){
  return Lgwtupload_client_DecoratedFileUpload$FileUploadWithMouseEvents_2_classLit;
}

function DecoratedFileUpload$FileUploadWithMouseEvents(){
}

_ = DecoratedFileUpload$FileUploadWithMouseEvents.prototype = new FileUpload;
_.addChangeHandler = addChangeHandler_1;
_.addMouseOutHandler = addMouseOutHandler_4;
_.addMouseOverHandler = addMouseOverHandler_4;
_.getClass$ = getClass_204;
_.typeId$ = 130;
function $IFileInput$ButtonFileInput(this$static){
  $DecoratedFileUpload(this$static, ($clinit_399() , 'Choose a file to upload ...'));
  return this$static;
}

function $IFileInput$ButtonFileInput_0(this$static, w){
  $DecoratedFileUpload(this$static, '');
  $setButton(this$static, w);
  return this$static;
}

function getClass_205(){
  return Lgwtupload_client_IFileInput$ButtonFileInput_2_classLit;
}

function newInstance_0(){
  var ret, widget;
  ret = $IFileInput$ButtonFileInput(new IFileInput$ButtonFileInput);
  widget = this.button?this.button:$Button_0(new Button, this.text_0);
  $setButton(ret, widget);
  return ret;
}

function setLength(length_0){
}

function IFileInput$ButtonFileInput(){
}

_ = IFileInput$ButtonFileInput.prototype = new DecoratedFileUpload;
_.getClass$ = getClass_205;
_.newInstance_0 = newInstance_0;
_.setLength = setLength;
_.typeId$ = 131;
function $IFileInput$AnchorFileInput(this$static){
  $IFileInput$ButtonFileInput_0(this$static, $Anchor(new Anchor));
  return this$static;
}

function getClass_206(){
  return Lgwtupload_client_IFileInput$AnchorFileInput_2_classLit;
}

function IFileInput$AnchorFileInput(){
}

_ = IFileInput$AnchorFileInput.prototype = new IFileInput$ButtonFileInput;
_.getClass$ = getClass_206;
_.typeId$ = 132;
function $IFileInput$BrowserFileInput(this$static){
  $DecoratedFileUpload$FileUploadWithMouseEvents(this$static);
  return this$static;
}

function getClass_207(){
  return Lgwtupload_client_IFileInput$BrowserFileInput_2_classLit;
}

function getWidget_3(){
  return this;
}

function newInstance_1(){
  return $IFileInput$BrowserFileInput(new IFileInput$BrowserFileInput);
}

function setLength_0(length_0){
  this.element_0.setAttribute('size', '' + length_0);
}

function setText_5(text){
}

function IFileInput$BrowserFileInput(){
}

_ = IFileInput$BrowserFileInput.prototype = new DecoratedFileUpload$FileUploadWithMouseEvents;
_.getClass$ = getClass_207;
_.getWidget = getWidget_3;
_.newInstance_0 = newInstance_1;
_.setLength = setLength_0;
_.setText = setText_5;
_.typeId$ = 133;
function $clinit_365(){
  $clinit_365 = nullMethod;
  ANCHOR = $IFileInput$FileInputType$1(new IFileInput$FileInputType$1, 'ANCHOR', 0);
  BROWSER_INPUT = $IFileInput$FileInputType$2(new IFileInput$FileInputType$2, 'BROWSER_INPUT', 1);
  BUTTON = $IFileInput$FileInputType$3(new IFileInput$FileInputType$3, 'BUTTON', 2);
  LABEL = $IFileInput$FileInputType$4(new IFileInput$FileInputType$4, 'LABEL', 3);
}

function getClass_208(){
  return Lgwtupload_client_IFileInput$FileInputType_2_classLit;
}

function values_4(){
  $clinit_365();
  return initValues(_3Lgwtupload_client_IFileInput$FileInputType_2_classLit, 228, 34, [ANCHOR, BROWSER_INPUT, BUTTON, LABEL]);
}

function IFileInput$FileInputType(){
}

_ = IFileInput$FileInputType.prototype = new Enum;
_.getClass$ = getClass_208;
_.typeId$ = 134;
var ANCHOR, BROWSER_INPUT, BUTTON, LABEL;
function $clinit_366(){
  $clinit_366 = nullMethod;
  $clinit_365();
}

function $IFileInput$FileInputType$1(this$static, enum$name, enum$ordinal){
  $clinit_366();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_209(){
  return Lgwtupload_client_IFileInput$FileInputType$1_2_classLit;
}

function getInstance(){
  return $IFileInput$AnchorFileInput(new IFileInput$AnchorFileInput);
}

function IFileInput$FileInputType$1(){
}

_ = IFileInput$FileInputType$1.prototype = new IFileInput$FileInputType;
_.getClass$ = getClass_209;
_.getInstance = getInstance;
_.typeId$ = 135;
function $clinit_367(){
  $clinit_367 = nullMethod;
  $clinit_365();
}

function $IFileInput$FileInputType$2(this$static, enum$name, enum$ordinal){
  $clinit_367();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_210(){
  return Lgwtupload_client_IFileInput$FileInputType$2_2_classLit;
}

function getInstance_0(){
  return $IFileInput$BrowserFileInput(new IFileInput$BrowserFileInput);
}

function IFileInput$FileInputType$2(){
}

_ = IFileInput$FileInputType$2.prototype = new IFileInput$FileInputType;
_.getClass$ = getClass_210;
_.getInstance = getInstance_0;
_.typeId$ = 136;
function $clinit_368(){
  $clinit_368 = nullMethod;
  $clinit_365();
}

function $IFileInput$FileInputType$3(this$static, enum$name, enum$ordinal){
  $clinit_368();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_211(){
  return Lgwtupload_client_IFileInput$FileInputType$3_2_classLit;
}

function getInstance_1(){
  return $IFileInput$ButtonFileInput(new IFileInput$ButtonFileInput);
}

function IFileInput$FileInputType$3(){
}

_ = IFileInput$FileInputType$3.prototype = new IFileInput$FileInputType;
_.getClass$ = getClass_211;
_.getInstance = getInstance_1;
_.typeId$ = 137;
function $clinit_369(){
  $clinit_369 = nullMethod;
  $clinit_365();
}

function $IFileInput$FileInputType$4(this$static, enum$name, enum$ordinal){
  $clinit_369();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_212(){
  return Lgwtupload_client_IFileInput$FileInputType$4_2_classLit;
}

function getInstance_2(){
  return $IFileInput$LabelFileInput(new IFileInput$LabelFileInput);
}

function IFileInput$FileInputType$4(){
}

_ = IFileInput$FileInputType$4.prototype = new IFileInput$FileInputType;
_.getClass$ = getClass_212;
_.getInstance = getInstance_2;
_.typeId$ = 138;
function $IFileInput$LabelFileInput(this$static){
  $IFileInput$ButtonFileInput_0(this$static, $Label(new Label));
  $addDomHandler(this$static.input, $IFileInput$LabelFileInput$1(new IFileInput$LabelFileInput$1, this$static), ($clinit_93() , $clinit_93() , TYPE_1));
  return this$static;
}

function getClass_213(){
  return Lgwtupload_client_IFileInput$LabelFileInput_2_classLit;
}

function IFileInput$LabelFileInput(){
}

_ = IFileInput$LabelFileInput.prototype = new IFileInput$ButtonFileInput;
_.getClass$ = getClass_213;
_.typeId$ = 139;
function $IFileInput$LabelFileInput$1(this$static, this$1){
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_214(){
  return Lgwtupload_client_IFileInput$LabelFileInput$1_2_classLit;
}

function onChange(event_0){
  $setText_3(this.this$1, this.this$1.input.element_0.value);
}

function IFileInput$LabelFileInput$1(){
}

_ = IFileInput$LabelFileInput$1.prototype = new Object_0;
_.getClass$ = getClass_214;
_.onChange = onChange;
_.typeId$ = 140;
_.this$1 = null;
function $clinit_373(){
  $clinit_373 = nullMethod;
  DEFAULT_CANCEL_CFG = of(($clinit_374() , REMOVE_REMOTE), initValues(_3Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit, 230, 36, [STOP_CURRENT]));
  of(STOP_CURRENT, initValues(_3Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit, 230, 36, [REMOVE_REMOTE, REMOVE_CANCELLED_FROM_LIST]));
}

var DEFAULT_CANCEL_CFG;
function $clinit_374(){
  $clinit_374 = nullMethod;
  DISABLED = $IUploadStatus$CancelBehavior(new IUploadStatus$CancelBehavior, 'DISABLED', 0);
  REMOVE_CANCELLED_FROM_LIST = $IUploadStatus$CancelBehavior(new IUploadStatus$CancelBehavior, 'REMOVE_CANCELLED_FROM_LIST', 1);
  REMOVE_REMOTE = $IUploadStatus$CancelBehavior(new IUploadStatus$CancelBehavior, 'REMOVE_REMOTE', 2);
  STOP_CURRENT = $IUploadStatus$CancelBehavior(new IUploadStatus$CancelBehavior, 'STOP_CURRENT', 3);
}

function $IUploadStatus$CancelBehavior(this$static, enum$name, enum$ordinal){
  $clinit_374();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_215(){
  return Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit;
}

function values_5(){
  $clinit_374();
  return initValues(_3Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit, 230, 36, [DISABLED, REMOVE_CANCELLED_FROM_LIST, REMOVE_REMOTE, STOP_CURRENT]);
}

function IUploadStatus$CancelBehavior(){
}

_ = IUploadStatus$CancelBehavior.prototype = new Enum;
_.getClass$ = getClass_215;
_.typeId$ = 141;
var DISABLED, REMOVE_CANCELLED_FROM_LIST, REMOVE_REMOTE, STOP_CURRENT;
function $clinit_375(){
  $clinit_375 = nullMethod;
  CANCELED = $IUploadStatus$Status(new IUploadStatus$Status, 'CANCELED', 0);
  CANCELING = $IUploadStatus$Status(new IUploadStatus$Status, 'CANCELING', 1);
  DELETED = $IUploadStatus$Status(new IUploadStatus$Status, 'DELETED', 2);
  DONE = $IUploadStatus$Status(new IUploadStatus$Status, 'DONE', 3);
  ERROR = $IUploadStatus$Status(new IUploadStatus$Status, 'ERROR', 4);
  INPROGRESS = $IUploadStatus$Status(new IUploadStatus$Status, 'INPROGRESS', 5);
  QUEUED = $IUploadStatus$Status(new IUploadStatus$Status, 'QUEUED', 6);
  REPEATED = $IUploadStatus$Status(new IUploadStatus$Status, 'REPEATED', 7);
  SUBMITING = $IUploadStatus$Status(new IUploadStatus$Status, 'SUBMITING', 8);
  SUCCESS = $IUploadStatus$Status(new IUploadStatus$Status, 'SUCCESS', 9);
  UNINITIALIZED = $IUploadStatus$Status(new IUploadStatus$Status, 'UNINITIALIZED', 10);
  CHANGED = $IUploadStatus$Status(new IUploadStatus$Status, 'CHANGED', 11);
}

function $IUploadStatus$Status(this$static, enum$name, enum$ordinal){
  $clinit_375();
  this$static.name_0 = enum$name;
  this$static.ordinal = enum$ordinal;
  return this$static;
}

function getClass_216(){
  return Lgwtupload_client_IUploadStatus$Status_2_classLit;
}

function values_6(){
  $clinit_375();
  return initValues(_3Lgwtupload_client_IUploadStatus$Status_2_classLit, 231, 37, [CANCELED, CANCELING, DELETED, DONE, ERROR, INPROGRESS, QUEUED, REPEATED, SUBMITING, SUCCESS, UNINITIALIZED, CHANGED]);
}

function IUploadStatus$Status(){
}

_ = IUploadStatus$Status.prototype = new Enum;
_.getClass$ = getClass_216;
_.typeId$ = 142;
var CANCELED, CANCELING, CHANGED, DELETED, DONE, ERROR, INPROGRESS, QUEUED, REPEATED, SUBMITING, SUCCESS, UNINITIALIZED;
function getClass_217(){
  return Lgwtupload_client_IUploadStatus_1UploadStatusConstants_1_2_classLit;
}

function uploadStatusCanceled(){
  return 'Canceled';
}

function uploadStatusCanceling(){
  return 'Canceling ...';
}

function uploadStatusDeleted(){
  return 'Deleted';
}

function uploadStatusError(){
  return 'Error';
}

function uploadStatusInProgress(){
  return 'In progress';
}

function uploadStatusQueued(){
  return 'Queued';
}

function uploadStatusSubmitting(){
  return 'Submitting form ...';
}

function uploadStatusSuccess(){
  return 'Done';
}

function IUploadStatus_UploadStatusConstants_(){
}

_ = IUploadStatus_UploadStatusConstants_.prototype = new Object_0;
_.getClass$ = getClass_217;
_.uploadStatusCanceled = uploadStatusCanceled;
_.uploadStatusCanceling = uploadStatusCanceling;
_.uploadStatusDeleted = uploadStatusDeleted;
_.uploadStatusError = uploadStatusError;
_.uploadStatusInProgress = uploadStatusInProgress;
_.uploadStatusQueued = uploadStatusQueued;
_.uploadStatusSubmitting = uploadStatusSubmitting;
_.uploadStatusSuccess = uploadStatusSuccess;
_.typeId$ = 0;
function getXmlNodeValue(doc, tag){
  var i, list, n, node, ret, textNodes, out, out_0;
  if (!doc) {
    return null;
  }
  list = $NodeListImpl(new NodeListImpl, ($clinit_347() , doc.jsObject.selectNodes(".//*[local-name()='" + tag + "']")));
  if (list.jsObject.length == 0) {
    return null;
  }
  node = build(item(list.jsObject, 0));
  if ((out = node.jsObject.nodeType , out == null?-1:out) != 1) {
    return null;
  }
  ret = '';
  textNodes = $NodeListImpl(new NodeListImpl, node.jsObject.childNodes);
  for (i = 0; i < textNodes.jsObject.length; ++i) {
    n = build(item(textNodes.jsObject, i));
    (out_0 = n.jsObject.nodeType , out_0 == null?-1:out_0) == 3 && $replaceAll(n.jsObject.nodeValue, '[ \\n\\t\\r]', '').length > 0 && (ret += n.jsObject.nodeValue);
  }
  return ret.length == 0?null:$replaceAll($replaceAll(ret, '^\\s+', ''), '\\s+$', '');
}

function validateExtension(validExtensions, fileName){
  var i, valid;
  if (fileName == null || fileName.length == 0) {
    return false;
  }
  valid = validExtensions == null || validExtensions.length == 0;
  for (i = 0; !valid && i < validExtensions.length; ++i) {
    if (validExtensions[i] != null && $matches(fileName.toLowerCase(), validExtensions[i])) {
      valid = true;
      break;
    }
  }
  return valid;
}

function getClass_218(){
  return Lgwtupload_client_IUploader_1UploaderConstants_1_2_classLit;
}

function uploadStatusCanceled_0(){
  return 'Canceled';
}

function uploadStatusCanceling_0(){
  return 'Canceling ...';
}

function uploadStatusDeleted_0(){
  return 'Deleted';
}

function uploadStatusError_0(){
  return 'Error';
}

function uploadStatusInProgress_0(){
  return 'In progress';
}

function uploadStatusQueued_0(){
  return 'Queued';
}

function uploadStatusSubmitting_0(){
  return 'Submitting form ...';
}

function uploadStatusSuccess_0(){
  return 'Done';
}

function uploaderActiveUpload(){
  return 'There is already an active upload, try later.';
}

function uploaderAlreadyDone(){
  return 'This file was already uploaded.';
}

function uploaderBlobstoreError(){
  return 'It seems the application is configured to use GAE blobstore.\nThe server has raised an error while creating an Upload-Url\nBe sure thar you have enabled billing for this application in order to use blobstore.';
}

function uploaderBrowse(){
  return 'Choose a file to upload ...';
}

function uploaderInvalidExtension(){
  return 'Invalid file.\nOnly these types are allowed:\n';
}

function uploaderSend(){
  return 'Send';
}

function uploaderServerError(){
  return 'Invalid server response. Have you configured correctly your application in the server side?';
}

function uploaderServerUnavailable(){
  return 'Unable to contact with the server: ';
}

function uploaderTimeout(){
  return 'Timeout sending the file:\n perhaps your browser does not send files correctly,\n your session has expired,\n or there was a server error.\nPlease try again.';
}

function IUploader_UploaderConstants_(){
}

_ = IUploader_UploaderConstants_.prototype = new Object_0;
_.getClass$ = getClass_218;
_.uploadStatusCanceled = uploadStatusCanceled_0;
_.uploadStatusCanceling = uploadStatusCanceling_0;
_.uploadStatusDeleted = uploadStatusDeleted_0;
_.uploadStatusError = uploadStatusError_0;
_.uploadStatusInProgress = uploadStatusInProgress_0;
_.uploadStatusQueued = uploadStatusQueued_0;
_.uploadStatusSubmitting = uploadStatusSubmitting_0;
_.uploadStatusSuccess = uploadStatusSuccess_0;
_.uploaderActiveUpload = uploaderActiveUpload;
_.uploaderAlreadyDone = uploaderAlreadyDone;
_.uploaderBlobstoreError = uploaderBlobstoreError;
_.uploaderBrowse = uploaderBrowse;
_.uploaderInvalidExtension = uploaderInvalidExtension;
_.uploaderSend = uploaderSend;
_.uploaderServerError = uploaderServerError;
_.uploaderServerUnavailable = uploaderServerUnavailable;
_.uploaderTimeout = uploaderTimeout;
_.typeId$ = 0;
function $ModalUploadStatus(this$static){
  $BaseUploadStatus(this$static);
  this$static.box = $PopupPanel_1(new PopupPanel, false, true);
  setStyleName(this$static.panel.getStyleElement(), 'upld-status', true);
  this$static.box.add(this$static.panel);
  this$static.box.element_0.firstChild.className = 'GWTUpld';
  return this$static;
}

function getClass_219(){
  return Lgwtupload_client_ModalUploadStatus_2_classLit;
}

function getWidget_4(){
  return $HTML(new HTML);
}

function setVisible_4(b){
  b?this.box.center_0():this.box.hide();
}

function ModalUploadStatus(){
}

_ = ModalUploadStatus.prototype = new BaseUploadStatus;
_.getClass$ = getClass_219;
_.getWidget = getWidget_4;
_.setVisible = setVisible_4;
_.typeId$ = 0;
function $MultiUploader(this$static, type){
  $MultiUploader_0(this$static, type, $BaseUploadStatus(new BaseUploadStatus));
  return this$static;
}

function $MultiUploader_0(this$static, type, status_0){
  this$static.statusChangeHandler = $MultiUploader$1(new MultiUploader$1, this$static);
  this$static.i18nStrs = ($clinit_399() , I18N_CONSTANTS);
  this$static.multiUploaderPanel = $FlowPanel(new FlowPanel);
  this$static.uploaders = $Vector(new Vector);
  this$static.fileInputType = type;
  this$static.statusWidget = status_0;
  $initWidget(this$static, this$static.multiUploaderPanel);
  this$static.element_0['className'] = 'upld-multiple';
  $newUploaderInstance(this$static);
  return this$static;
}

function $getNonErroneousUploads(this$static){
  var ret, u, u$iterator;
  ret = 0;
  for (u$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.uploaders.arrayList); u$iterator.i < u$iterator.this$0.size_0();) {
    u = dynamicCast($next_5(u$iterator), 70);
    (u.getStatus() == ($clinit_375() , SUCCESS) || u.getStatus() == INPROGRESS || u.getStatus() == QUEUED || u.getStatus() == SUBMITING) && ++ret;
  }
  return ret;
}

function $newUploaderInstance(this$static){
  var status_0;
  if (this$static.maximumFiles > 0 && $getNonErroneousUploads(this$static) >= this$static.maximumFiles) {
    return;
  }
  if (this$static.currentUploader) {
    status_0 = this$static.currentUploader.statusWidget.getStatus();
    if (status_0 == ($clinit_375() , UNINITIALIZED)) {
      return;
    }
    this$static.lastUploader = this$static.currentUploader;
    this$static.statusWidget = this$static.lastUploader.statusWidget.newInstance();
    !!this$static.onStartHandler && $onStart_0(this$static.onStartHandler, this$static.lastUploader);
  }
  this$static.currentUploader = $Uploader(new Uploader, this$static.fileInputType, true);
  $add_13(this$static.uploaders.arrayList, this$static.currentUploader);
  $setStatusWidget(this$static.currentUploader, this$static.statusWidget);
  !!this$static.lastUploader && $setFileInput(this$static.currentUploader, this$static.lastUploader.fileInput.newInstance_0());
  $setValidExtensions(this$static.currentUploader, this$static.validExtensions);
  $setServletPath(this$static.currentUploader, this$static.servletPath);
  this$static.currentUploader.avoidRepeatedFiles = true;
  this$static.currentUploader.setI18Constants_0(this$static.i18nStrs);
  $addOnStatusChangedHandler(this$static.currentUploader, this$static.statusChangeHandler);
  !!this$static.onChangeHandler && $addOnChangeUploadHandler(this$static.currentUploader, this$static.onChangeHandler);
  !!this$static.onFinishHandler && $addOnFinishUploadHandler(this$static.currentUploader, this$static.onFinishHandler);
  !!this$static.onStatusChangedHandler && $addOnStatusChangedHandler(this$static.currentUploader, this$static.onStatusChangedHandler);
  !!this$static.onCancelHandler && $addOnCancelUploadHandler(this$static.currentUploader, this$static.onCancelHandler);
  $setFileInputPrefix(this$static.currentUploader, 'GWTMU');
  this$static.currentUploader.fileInput.setLength(40);
  this$static.currentUploader.setEnabled(true);
  $add_7(this$static.multiUploaderPanel, this$static.currentUploader);
  !this$static.lastUploader && (this$static.lastUploader = this$static.currentUploader);
}

function add_8(w){
  $add_7(this.currentUploader.uploadForm.formElements, w);
}

function addOnCancelUploadHandler(handler){
  this.onCancelHandler = handler;
  return $addOnCancelUploadHandler(this.currentUploader, handler);
}

function addOnChangeUploadHandler(handler){
  this.onChangeHandler = handler;
  return $addOnChangeUploadHandler(this.currentUploader, handler);
}

function addOnFinishUploadHandler(handler){
  this.onFinishHandler = handler;
  return $addOnFinishUploadHandler(this.currentUploader, handler);
}

function addOnStartUploadHandler(handler){
  this.onStartHandler = handler;
  return $MultiUploader$2(new MultiUploader$2, this);
}

function addOnStatusChangedHandler(handler){
  var uploader, uploader$iterator;
  this.onStatusChangedHandler = handler;
  for (uploader$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.uploaders.arrayList); uploader$iterator.i < uploader$iterator.this$0.size_0();) {
    uploader = dynamicCast($next_5(uploader$iterator), 70);
    uploader.addOnStatusChangedHandler(handler);
  }
  return $MultiUploader$3(new MultiUploader$3, this);
}

function fileUrl(){
  return $fileUrl(this.lastUploader);
}

function getClass_220(){
  return Lgwtupload_client_MultiUploader_2_classLit;
}

function getData_0(){
  return $getData(this.lastUploader);
}

function getStatus_0(){
  var stat, uploader, uploader$iterator;
  for (uploader$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.uploaders.arrayList); uploader$iterator.i < uploader$iterator.this$0.size_0();) {
    uploader = dynamicCast($next_5(uploader$iterator), 70);
    stat = uploader.getStatus();
    if (stat == ($clinit_375() , INPROGRESS) || stat == QUEUED || stat == SUBMITING) {
      return INPROGRESS;
    }
  }
  if (this.uploaders.arrayList.size <= 1) {
    return $clinit_375() , UNINITIALIZED;
  }
   else {
    return $clinit_375() , DONE;
  }
}

function iterator_6(){
  return $SimplePanel$1(new SimplePanel$1, this.currentUploader.uploadForm);
}

function remove_12(w){
  return $remove(this.currentUploader.uploadForm, w);
}

function setI18Constants_0(strs){
  this.i18nStrs = strs;
  this.currentUploader.setI18Constants_0(this.i18nStrs);
}

function setServletPath(path){
  this.servletPath = path;
  $setServletPath(this.currentUploader, path);
}

function setValidExtensions(ext){
  this.validExtensions = ext;
  $setValidExtensions(this.currentUploader, ext);
}

function submit(){
  $submit_0(this.currentUploader.uploadForm);
}

function MultiUploader(){
}

_ = MultiUploader.prototype = new Composite;
_.add = add_8;
_.addOnCancelUploadHandler = addOnCancelUploadHandler;
_.addOnChangeUploadHandler = addOnChangeUploadHandler;
_.addOnFinishUploadHandler = addOnFinishUploadHandler;
_.addOnStartUploadHandler = addOnStartUploadHandler;
_.addOnStatusChangedHandler = addOnStatusChangedHandler;
_.fileUrl_0 = fileUrl;
_.getClass$ = getClass_220;
_.getData_0 = getData_0;
_.getStatus = getStatus_0;
_.iterator_0 = iterator_6;
_.remove = remove_12;
_.setI18Constants_0 = setI18Constants_0;
_.setServletPath = setServletPath;
_.setValidExtensions = setValidExtensions;
_.submit_0 = submit;
_.typeId$ = 143;
_.currentUploader = null;
_.fileInputType = null;
_.lastUploader = null;
_.maximumFiles = 0;
_.onCancelHandler = null;
_.onChangeHandler = null;
_.onFinishHandler = null;
_.onStartHandler = null;
_.onStatusChangedHandler = null;
_.servletPath = null;
_.statusWidget = null;
_.validExtensions = null;
function $MultiUploader$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_221(){
  return Lgwtupload_client_MultiUploader$1_2_classLit;
}

function onStatusChanged(uploader){
  var u, w;
  u = uploader;
  if (u.statusWidget.getStatus() == ($clinit_375() , CHANGED)) {
    u.fileInput.setVisible(false);
    u.statusWidget.setVisible(true);
  }
   else if (u.statusWidget.getStatus() == SUBMITING) {
    w = u.fileInput.getWidget();
    w.getElement_0().style['position'] = ($clinit_76() , 'absolute');
    w.getElement_0().style['left'] = -4000 + ($clinit_81() , 'px');
    u.fileInput.setVisible(true);
  }
   else if (u.statusWidget.getStatus() == REPEATED) {
    u.fileInput.setVisible(true);
    u.statusWidget.setVisible(false);
  }
   else if (u.statusWidget.getStatus() == INPROGRESS) {
    u.fileInput.setVisible(false);
  }
   else {
    u.finished && u.uploadForm.attached && $removeFromParent(u.uploadForm);
    u.statusWidget.setVisible(true);
    $newUploaderInstance(this.this$0);
  }
}

function MultiUploader$1(){
}

_ = MultiUploader$1.prototype = new Object_0;
_.getClass$ = getClass_221;
_.onStatusChanged = onStatusChanged;
_.typeId$ = 144;
_.this$0 = null;
function $MultiUploader$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_222(){
  return Lgwtupload_client_MultiUploader$2_2_classLit;
}

function removeHandler_0(){
  this.this$0.onStartHandler = null;
}

function MultiUploader$2(){
}

_ = MultiUploader$2.prototype = new Object_0;
_.getClass$ = getClass_222;
_.removeHandler = removeHandler_0;
_.typeId$ = 145;
_.this$0 = null;
function $MultiUploader$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_223(){
  return Lgwtupload_client_MultiUploader$3_2_classLit;
}

function removeHandler_1(){
  this.this$0.onStatusChangedHandler = null;
}

function MultiUploader$3(){
}

_ = MultiUploader$3.prototype = new Object_0;
_.getClass$ = getClass_223;
_.removeHandler = removeHandler_1;
_.typeId$ = 146;
_.this$0 = null;
function $clinit_395(){
  $clinit_395 = nullMethod;
  $clinit_275();
}

function $setUrl_0(this$static, url){
  this$static.state.setUrl(this$static, url);
  $add_4(($clinit_288() , get_0(null)), this$static);
  this$static.element_0.style.display = 'none';
}

function getClass_224(){
  return Lgwtupload_client_PreloadedImage_2_classLit;
}

function getData_1(){
  return null;
}

function PreloadedImage(){
}

_ = PreloadedImage.prototype = new Image_0;
_.getClass$ = getClass_224;
_.getData_0 = getData_1;
_.typeId$ = 147;
_.containerId = null;
_.errHandler = null;
_.loadHandler = null;
_.onLoad = null;
_.realHeight_0 = 0;
_.realWidth_0 = 0;
_.thisInstance = null;
function $PreloadedImage$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_225(){
  return Lgwtupload_client_PreloadedImage$1_2_classLit;
}

function PreloadedImage$1(){
}

_ = PreloadedImage$1.prototype = new Object_0;
_.getClass$ = getClass_225;
_.typeId$ = 148;
_.this$0 = null;
function $PreloadedImage$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onLoad_0(this$static, event_0){
  var img;
  $removeHandler(this$static.this$0.loadHandler);
  $removeHandler(this$static.this$0.errHandler);
  img = dynamicCast(event_0.source, 71);
  if (img) {
    img.getElement_0().style.display = '';
    this$static.this$0.realWidth_0 = img.state.getWidth(img);
    this$static.this$0.realHeight_0 = img.state.getHeight(img);
  }
  this$static.this$0.containerId != null && !!get_0(this$static.this$0.containerId) && $add_4(get_0(this$static.this$0.containerId), this$static.this$0.thisInstance);
  !!this$static.this$0.onLoad && $onLoad_1(this$static.this$0.onLoad, this$static.this$0.thisInstance);
}

function getClass_226(){
  return Lgwtupload_client_PreloadedImage$2_2_classLit;
}

function PreloadedImage$2(){
}

_ = PreloadedImage$2.prototype = new Object_0;
_.getClass$ = getClass_226;
_.typeId$ = 149;
_.this$0 = null;
function $clinit_399(){
  $clinit_399 = nullMethod;
  I18N_CONSTANTS = new IUploader_UploaderConstants_;
  fileDone = $HashSet(new HashSet);
  fileQueue = $Vector(new Vector);
}

function $Uploader(this$static, type, automaticUpload){
  $clinit_399();
  $Uploader_0(this$static, type, null);
  this$static.setAutoSubmit(automaticUpload);
  return this$static;
}

function $Uploader_0(this$static, type, form){
  $clinit_399();
  this$static.automaticUploadTimer = $Uploader$1(new Uploader$1, this$static);
  this$static.cancelHandler = $Uploader$2(new Uploader$2, this$static);
  this$static.lastData = fromDouble($getTime0($Date(new Date_0)));
  this$static.onBlobstoreReceivedCallback = $Uploader$3(new Uploader$3, this$static);
  this$static.onCancelReceivedCallback = $Uploader$4(new Uploader$4, this$static);
  this$static.onChangeHandlers = $Vector(new Vector);
  this$static.onDeleteFileCallback = $Uploader$5(new Uploader$5, this$static);
  this$static.onFileInputChanged = $Uploader$6(new Uploader$6, this$static);
  this$static.onFinishHandlers = $Vector(new Vector);
  this$static.onSessionReceivedCallback = $Uploader$7(new Uploader$7, this$static);
  this$static.onStartHandlers = $Vector(new Vector);
  this$static.onStatusChangeHandlers = $Vector(new Vector);
  this$static.onStatusReceivedCallback = $Uploader$8(new Uploader$8, this$static);
  this$static.onSubmitCompleteHandler = $Uploader$9(new Uploader$9, this$static);
  this$static.onSubmitFormHandler = $Uploader$10(new Uploader$10, this$static);
  this$static.statusChangedHandler = $Uploader$11(new Uploader$11, this$static);
  this$static.statusWidget = $BaseUploadStatus(new BaseUploadStatus);
  this$static.i18nStrs = I18N_CONSTANTS;
  this$static.updateStatusTimer = $UpdateTimer(new UpdateTimer, this$static, 500);
  this$static.thisInstance = this$static;
  this$static.fileInputType = type;
  !form && (form = $Uploader$FormFlowPanel(new Uploader$FormFlowPanel));
  this$static.uploadForm = form;
  $setEncoding_0(this$static.uploadForm.element_0, 'multipart/form-data');
  this$static.uploadForm.element_0.method = 'post';
  this$static.uploadForm.element_0.action = this$static.servletPath;
  $addHandler(this$static.uploadForm, this$static.onSubmitFormHandler, ($clinit_256() , !TYPE_17 && (TYPE_17 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_17));
  $addHandler(this$static.uploadForm, this$static.onSubmitCompleteHandler, (!TYPE_16 && (TYPE_16 = $GwtEvent$Type(new GwtEvent$Type)) , TYPE_16));
  this$static.uploaderPanel = $HorizontalPanel(new HorizontalPanel);
  $add_8(this$static.uploaderPanel, this$static.uploadForm);
  this$static.uploaderPanel.getStyleElement()['className'] = 'GWTUpld';
  $setFileInput(this$static, this$static.fileInputType.getInstance());
  $setStatusWidget(this$static, this$static.statusWidget);
  $initWidget(this$static, this$static.uploaderPanel);
  return this$static;
}

function $addOnCancelUploadHandler(this$static, handler){
  return this$static.statusWidget.addCancelHandler($Uploader$12(new Uploader$12, this$static, handler));
}

function $addOnChangeUploadHandler(this$static, handler){
  $add_13(this$static.onChangeHandlers.arrayList, handler);
  return $Uploader$13(new Uploader$13, this$static, handler);
}

function $addOnFinishUploadHandler(this$static, handler){
  $add_13(this$static.onFinishHandlers.arrayList, handler);
  return $Uploader$14(new Uploader$14, this$static, handler);
}

function $addOnStatusChangedHandler(this$static, handler){
  $add_13(this$static.onStatusChangeHandlers.arrayList, handler);
  return $Uploader$16(new Uploader$16, this$static, handler);
}

function $addToQueue(this$static){
  this$static.statusWidget.setStatus(($clinit_375() , QUEUED));
  this$static.statusWidget.setProgress(0, 0);
  if (!($indexOf_2(fileQueue.arrayList, this$static.fileInput.getName(), 0) != -1)) {
    this$static.onStartUpload();
    $add_13(fileQueue.arrayList, this$static.fileInput.getName());
  }
}

function $assignNewNameToFileInput(this$static){
  var fileInputName;
  fileInputName = $replaceAll(this$static.fileInputPrefix + '-' + Math.random(), '\\.', '');
  this$static.fileInput.setName(fileInputName);
}

function $cancel_2(this$static){
  var $e0, e, reqBuilder;
  if (this$static.finished && !this$static.uploading) {
    if (this$static.successful) {
      try {
        reqBuilder = $RequestBuilder(new RequestBuilder, ($clinit_161() , GET), $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['remove=' + this$static.fileInput.getName()])));
        $sendRequest(reqBuilder, 'remove_file', this$static.onDeleteFileCallback);
      }
       catch ($e0) {
        $e0 = caught_0($e0);
        if (!instanceOf($e0, 2))
          throw $e0;
      }
    }
     else {
      this$static.statusWidget.setStatus(($clinit_375() , DELETED));
    }
    return;
  }
  if (this$static.cancelled) {
    return;
  }
  this$static.cancelled = true;
  $cancel_0(this$static.automaticUploadTimer);
  log('cancelling ' + this$static.uploading, null);
  if (this$static.uploading) {
    $cancel_0(this$static.updateStatusTimer);
    try {
      $sendAjaxRequestToCancelCurrentUpload(this$static);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 2)) {
        e = $e0;
        log('Exception cancelling request ' + e.getMessage(), e);
      }
       else 
        throw $e0;
    }
    this$static.statusWidget.setStatus(($clinit_375() , CANCELING));
  }
   else {
    $uploadFinished(this$static);
  }
}

function $cancelUpload(this$static, msg){
  this$static.successful = false;
  $uploadFinished(this$static);
  this$static.statusWidget.setStatus(($clinit_375() , ERROR));
  this$static.statusWidget.setError(msg);
}

function $composeURL(this$static, params){
  var e, e$iterator, par, par$array, par$index, par$max, ret, sep;
  ret = this$static.servletPath;
  ret = $replaceAll(ret, '[\\?&]+$', '');
  sep = ret.indexOf('?') != -1?'&':'?';
  for (par$array = params , par$index = 0 , par$max = par$array.length; par$index < par$max; ++par$index) {
    par = par$array[par$index];
    ret += sep + par;
    sep = '&';
  }
  for (e$iterator = (!listParamMap && (listParamMap = buildListParamMap($getQueryString())) , listParamMap).entrySet_0().iterator_0(); e$iterator.hasNext();) {
    e = dynamicCast(e$iterator.next_0(), 53);
    ret += sep + dynamicCast(e.getKey(), 1) + '=' + dynamicCast(dynamicCast(e.getValue(), 52).get_0(0), 1);
  }
  ret += sep + 'random=' + Math.random();
  return ret;
}

function $fileUrl(this$static){
  return $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this$static.fileInput.getName()]));
}

function $getData(this$static){
  return {url:$composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this$static.fileInput.getName()])), name:this$static.fileInput.getName(), filename:this$static.fileInput.getFilename(), basename:$replaceAll(this$static.fileInput.getFilename(), '^.*[/\\\\]', ''), response:this$static.serverResponse, status:this$static.statusWidget.getStatus().name_0};
}

function $isTheFirstInQueue(this$static){
  return fileQueue.arrayList.size > 0 && $equals_1(dynamicCast($get_3(fileQueue.arrayList, 0), 1), this$static.fileInput.getName());
}

function $onChangeInput(this$static){
  var handler, handler$iterator;
  this$static.statusWidget.setStatus(($clinit_375() , CHANGED));
  for (handler$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.onChangeHandlers.arrayList); handler$iterator.i < handler$iterator.this$0.size_0();) {
    handler = dynamicCast($next_5(handler$iterator), 73);
    $onChangeImpl(handler.val$jsChange.jsobject, {url:$composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this$static.fileInput.getName()])), name:this$static.fileInput.getName(), filename:this$static.fileInput.getFilename(), basename:$replaceAll(this$static.fileInput.getFilename(), '^.*[/\\\\]', ''), response:this$static.serverResponse, status:this$static.statusWidget.getStatus().name_0});
  }
}

function $onFinishUpload(this$static){
  var handler, handler$iterator;
  for (handler$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.onFinishHandlers.arrayList); handler$iterator.i < handler$iterator.this$0.size_0();) {
    handler = dynamicCast($next_5(handler$iterator), 74);
    $onChangeImpl(handler.val$jsChange.jsobject, {url:$composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this$static.fileInput.getName()])), name:this$static.fileInput.getName(), filename:this$static.fileInput.getFilename(), basename:$replaceAll(this$static.fileInput.getFilename(), '^.*[/\\\\]', ''), response:this$static.serverResponse, status:this$static.statusWidget.getStatus().name_0});
  }
}

function $onStartUpload(this$static){
  var handler, handler$iterator;
  for (handler$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.onStartHandlers.arrayList); handler$iterator.i < handler$iterator.this$0.size_0();) {
    handler = dynamicCast($next_5(handler$iterator), 75);
    $onChangeImpl(handler.val$jsChange.jsobject, {url:$composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this$static.fileInput.getName()])), name:this$static.fileInput.getName(), filename:this$static.fileInput.getFilename(), basename:$replaceAll(this$static.fileInput.getFilename(), '^.*[/\\\\]', ''), response:this$static.serverResponse, status:this$static.statusWidget.getStatus().name_0});
  }
}

function $parseAjaxResponse(this$static, responseTxt){
  var $e0, doc, e, error, totalKB, transferredKB;
  error = null;
  doc = null;
  try {
    doc = ($clinit_333() , $parse(impl_0, responseTxt));
    error = getXmlNodeValue(doc, 'error');
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 2)) {
      e = $e0;
      $matches(responseTxt.toLowerCase(), 'error') && (error = this$static.i18nStrs.uploaderServerError() + '\nAction: ' + this$static.servletPath + '\nException: ' + e.getMessage() + responseTxt);
    }
     else 
      throw $e0;
  }
  if (error != null) {
    this$static.successful = false;
    $cancelUpload(this$static, error);
    return;
  }
   else if (getXmlNodeValue(doc, 'wait') != null) {
    if (this$static.serverResponse != null) {
      log('server response received, cancelling the upload ' + this$static.fileInput.getFilename() + ' ' + this$static.serverResponse, null);
      this$static.successful = true;
      $uploadFinished(this$static);
    }
  }
   else if (getXmlNodeValue(doc, 'canceled') != null) {
    this$static.successful = false;
    this$static.cancelled = true;
    $uploadFinished(this$static);
    return;
  }
   else if (getXmlNodeValue(doc, 'finished') != null) {
    this$static.successful = true;
    $uploadFinished(this$static);
    return;
  }
   else if (getXmlNodeValue(doc, 'percent') != null) {
    this$static.lastData = fromDouble($getTime0($Date(new Date_0)));
    transferredKB = ~~(valueOf(__parseAndValidateInt(getXmlNodeValue(doc, 'currentBytes'), 10, -2147483648, 2147483647)).value_0 / 1024);
    totalKB = ~~(valueOf(__parseAndValidateInt(getXmlNodeValue(doc, 'totalBytes'), 10, -2147483648, 2147483647)).value_0 / 1024);
    this$static.statusWidget.setProgress(transferredKB, totalKB);
    return;
  }
   else {
    log('incorrect response: ' + this$static.fileInput.getFilename() + ' ' + responseTxt, null);
  }
  if (compare_0(sub(fromDouble($getTime0($Date(new Date_0))), this$static.lastData), Pea60_longLit) > 0) {
    this$static.successful = false;
    $cancelUpload(this$static, this$static.i18nStrs.uploaderTimeout());
    try {
      $sendAjaxRequestToCancelCurrentUpload(this$static);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (!instanceOf($e0, 2))
        throw $e0;
    }
  }
}

function $sendAjaxRequestToCancelCurrentUpload(this$static){
  var reqBuilder;
  reqBuilder = $RequestBuilder(new RequestBuilder, ($clinit_161() , GET), $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['cancel=true'])));
  $sendRequest(reqBuilder, 'cancel_upload', this$static.onCancelReceivedCallback);
}

function $sendAjaxRequestToGetBlobstorePath(this$static){
  var reqBuilder;
  reqBuilder = $RequestBuilder(new RequestBuilder, ($clinit_161() , GET), $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['blobstore=true'])));
  $setTimeoutMillis(reqBuilder, 10000);
  $sendRequest(reqBuilder, 'blobstore', this$static.onBlobstoreReceivedCallback);
}

function $sendAjaxRequestToValidateSession(this$static){
  var reqBuilder;
  reqBuilder = $RequestBuilder(new RequestBuilder, ($clinit_161() , GET), $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['new_session=true'])));
  $setTimeoutMillis(reqBuilder, 10000);
  $sendRequest(reqBuilder, 'create_session', this$static.onSessionReceivedCallback);
}

function $setFileInput(this$static, input){
  !!this$static.fileInput && $removeFromParent(this$static.fileInput.getWidget());
  this$static.fileInput = input;
  this$static.fileInput.addChangeHandler(this$static.onFileInputChanged);
  this$static.fileInput.setText(this$static.i18nStrs.uploaderBrowse());
  this$static.fileInput.setEnabled(this$static.enabled);
  this$static.fileInput.setLength(40);
  $assignNewNameToFileInput(this$static);
  $add_7(this$static.uploadForm.formElements, this$static.fileInput.getWidget());
}

function $setFileInputPrefix(this$static, prefix){
  this$static.fileInputPrefix = prefix;
  $assignNewNameToFileInput(this$static);
}

function $setServletPath(this$static, path){
  if (path != null) {
    this$static.servletPath = path;
    this$static.uploadForm.element_0.action = path;
  }
}

function $setStatusWidget(this$static, stat){
  if (!stat) {
    return;
  }
  $remove_5(this$static.uploaderPanel, this$static.statusWidget.getWidget());
  this$static.statusWidget = stat;
  !stat.getWidget().isAttached() && $add_8(this$static.uploaderPanel, this$static.statusWidget.getWidget());
  this$static.statusWidget.getWidget().addStyleName_0('upld-status');
  this$static.statusWidget.setVisible(false);
  this$static.statusWidget.addCancelHandler(this$static.cancelHandler);
  this$static.statusWidget.setStatusChangedHandler(this$static.statusChangedHandler);
}

function $setValidExtensions(this$static, validExtensions){
  var ext, i, j;
  if (validExtensions == null) {
    this$static.validExtensions = initDim(_3Ljava_lang_String_2_classLit, 240, 1, 0, 0);
    return;
  }
  this$static.validExtensions = initDim(_3Ljava_lang_String_2_classLit, 240, 1, validExtensions.length, 0);
  this$static.validExtensionsMsg = '';
  for (i = 0 , j = 0; i < validExtensions.length; ++i) {
    ext = validExtensions[i];
    if (ext == null) {
      continue;
    }
    ext.charCodeAt(0) != 46 && (ext = '.' + ext);
    i > 0 && (this$static.validExtensionsMsg += ', ');
    this$static.validExtensionsMsg += ext;
    ext = $replaceAll(ext, '\\.', '\\\\.');
    ext = '.+' + ext;
    this$static.validExtensions[j++] = ext.toLowerCase();
  }
}

function $update_0(this$static){
  var $e0, e, reqBuilder;
  try {
    if (this$static.waitingForResponse) {
      return;
    }
    this$static.waitingForResponse = true;
    reqBuilder = $RequestBuilder(new RequestBuilder, ($clinit_161() , GET), $composeURL(this$static, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['filename=' + this$static.fileInput.getName(), 'c=' + this$static.requestsCounter++])));
    $setTimeoutMillis(reqBuilder, 10000);
    $sendRequest(reqBuilder, 'get_status', this$static.onStatusReceivedCallback);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 72)) {
      e = $e0;
      $printStackTrace(e);
    }
     else 
      throw $e0;
  }
}

function $uploadFinished(this$static){
  $remove_10(fileQueue, this$static.fileInput.getName());
  this$static.finished = true;
  this$static.uploading = false;
  $cancel_0(this$static.updateStatusTimer);
  this$static.statusWidget.setVisible(false);
  if (this$static.successful) {
    if (this$static.avoidRepeatedFiles) {
      if (!$containsKey(fileDone.map, this$static.fileInput.getFilename())) {
        $add_16(fileDone, this$static.fileInput.getFilename());
        this$static.statusWidget.setStatus(($clinit_375() , SUCCESS));
      }
    }
     else {
      this$static.statusWidget.setStatus(($clinit_375() , SUCCESS));
    }
  }
   else 
    this$static.cancelled?this$static.statusWidget.setStatus(($clinit_375() , CANCELED)):this$static.statusWidget.setStatus(($clinit_375() , ERROR));
  this$static.onFinishUpload();
}

function $validateExtension(this$static, filename){
  var valid;
  if (filename == null || filename.length == 0) {
    return false;
  }
  valid = validateExtension(this$static.validExtensions, filename);
  !valid && this$static.statusWidget.setError(this$static.i18nStrs.uploaderInvalidExtension() + this$static.validExtensionsMsg);
  return valid;
}

function add_9(w){
  $add_7(this.uploadForm.formElements, w);
}

function addOnCancelUploadHandler_0(handler){
  return this.statusWidget.addCancelHandler($Uploader$12(new Uploader$12, this, handler));
}

function addOnChangeUploadHandler_0(handler){
  return $add_13(this.onChangeHandlers.arrayList, handler) , $Uploader$13(new Uploader$13, this, handler);
}

function addOnFinishUploadHandler_0(handler){
  return $add_13(this.onFinishHandlers.arrayList, handler) , $Uploader$14(new Uploader$14, this, handler);
}

function addOnStartUploadHandler_0(handler){
  $add_13(this.onStartHandlers.arrayList, handler);
  return $Uploader$15(new Uploader$15, this, handler);
}

function addOnStatusChangedHandler_0(handler){
  return $add_13(this.onStatusChangeHandlers.arrayList, handler) , $Uploader$16(new Uploader$16, this, handler);
}

function fileUrl_0(){
  return $composeURL(this, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this.fileInput.getName()]));
}

function getClass_227(){
  return Lgwtupload_client_Uploader_2_classLit;
}

function getData_2(){
  return {url:$composeURL(this, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + this.fileInput.getName()])), name:this.fileInput.getName(), filename:this.fileInput.getFilename(), basename:$replaceAll(this.fileInput.getFilename(), '^.*[/\\\\]', ''), response:this.serverResponse, status:this.statusWidget.getStatus().name_0};
}

function getStatus_1(){
  return this.statusWidget.getStatus();
}

function iterator_7(){
  return $SimplePanel$1(new SimplePanel$1, this.uploadForm);
}

function log(msg, e){
  $clinit_399();
  var html;
  if (!mlog) {
    if ((ensureParameterMap() , dynamicCast($get_2(paramMap, 'log'), 1)) != null) {
      mlog = $HTML(new HTML);
      $add_4(($clinit_288() , get_0(null)), mlog);
      log(msg, e);
    }
  }
   else {
    html = $replaceAll(msg + '\n' + (e?e.getMessage():''), '\n', '<br/>');
    $setHTML_1(mlog, ($clinit_56() , mlog.element_0).innerHTML + html);
  }
}

function onChangeInput(){
  $onChangeInput(this);
}

function onFinishUpload(){
  $onFinishUpload(this);
}

function onStartUpload(){
  $onStartUpload(this);
}

function remove_13(w){
  return $remove(this.uploadForm, w);
}

function setAutoSubmit(b){
  this.autoSubmit = b;
}

function setEnabled_3(b){
  this.enabled = b;
  !!this.fileInput && this.fileInput.setEnabled(b);
}

function setI18Constants_1(strs){
  this.i18nStrs = strs;
  this.fileInput.setText(strs.uploaderBrowse());
  this.statusWidget.setI18Constants(strs);
}

function setServletPath_0(path){
  $setServletPath(this, path);
}

function setValidExtensions_0(validExtensions){
  $setValidExtensions(this, validExtensions);
}

function submit_0(){
  $submit_0(this.uploadForm);
}

function Uploader(){
}

_ = Uploader.prototype = new Composite;
_.add = add_9;
_.addOnCancelUploadHandler = addOnCancelUploadHandler_0;
_.addOnChangeUploadHandler = addOnChangeUploadHandler_0;
_.addOnFinishUploadHandler = addOnFinishUploadHandler_0;
_.addOnStartUploadHandler = addOnStartUploadHandler_0;
_.addOnStatusChangedHandler = addOnStatusChangedHandler_0;
_.fileUrl_0 = fileUrl_0;
_.getClass$ = getClass_227;
_.getData_0 = getData_2;
_.getStatus = getStatus_1;
_.iterator_0 = iterator_7;
_.onChangeInput = onChangeInput;
_.onFinishUpload = onFinishUpload;
_.onStartUpload = onStartUpload;
_.remove = remove_13;
_.setAutoSubmit = setAutoSubmit;
_.setEnabled = setEnabled_3;
_.setI18Constants_0 = setI18Constants_1;
_.setServletPath = setServletPath_0;
_.setValidExtensions = setValidExtensions_0;
_.submit_0 = submit_0;
_.typeId$ = 150;
_.autoSubmit = false;
_.avoidRepeatedFiles = false;
_.basename = null;
_.blobstore = false;
_.cancelled = false;
_.enabled = true;
_.fileInput = null;
_.fileInputPrefix = 'GWTU';
_.fileInputType = null;
_.finished = false;
_.hasSession = false;
_.receivedBlobPath = false;
_.requestsCounter = 0;
_.serverResponse = null;
_.servletPath = 'servlet.gupld';
_.successful = false;
_.thisInstance = null;
_.uploadForm = null;
_.uploaderPanel = null;
_.uploading = false;
_.validExtensions = null;
_.validExtensionsMsg = '';
_.waitingForResponse = false;
var I18N_CONSTANTS, fileDone, fileQueue, mlog = null;
function $clinit_400(){
  $clinit_400 = nullMethod;
  $clinit_399();
}

function $SingleUploader(this$static, type){
  $clinit_400();
  $SingleUploader_1(this$static, type, null, $Button(new Button));
  return this$static;
}

function $SingleUploader_0(this$static, type, status_0){
  $clinit_400();
  $SingleUploader_1(this$static, type, status_0, $Button(new Button));
  return this$static;
}

function $SingleUploader_1(this$static, type, status_0, button){
  $clinit_400();
  $SingleUploader_2(this$static, type, status_0, button, null);
  return this$static;
}

function $SingleUploader_2(this$static, type, status_0, button, form){
  var thisInstance;
  $clinit_400();
  $Uploader_0(this$static, type, form);
  thisInstance = this$static;
  !status_0 && (status_0 = $ModalUploadStatus(new ModalUploadStatus));
  $setStatusWidget(this$static, status_0);
  this$static.button = button;
  button.getText().length == 0 && button.setText('Send');
  button.addStyleName_0('submit');
  button.addClickHandler($SingleUploader$1(new SingleUploader$1, thisInstance));
  !button.parent_0 && ($add_7(this$static.uploadForm.formElements, button) , undefined);
  return this$static;
}

function getClass_228(){
  return Lgwtupload_client_SingleUploader_2_classLit;
}

function onChangeInput_0(){
  $onChangeInput(this);
  this.button.addStyleName_0('changed');
  this.button.setFocus(true);
}

function onFinishUpload_0(){
  $onFinishUpload(this);
  this.statusWidget.getStatus() == ($clinit_375() , REPEATED) && this.statusWidget.setError(this.i18nStrs.uploaderAlreadyDone());
  this.statusWidget.setStatus(UNINITIALIZED);
  this.uploadForm.element_0.reset();
  $cancel_0(this.updateStatusTimer);
  this.uploading = this.cancelled = this.finished = this.successful = false;
  this.basename = this.serverResponse = null;
  $assignNewNameToFileInput(this);
  this.button.setEnabled(true);
  this.button.removeStyleName('changed');
  this.autoSubmit && this.fileInput.setText(this.i18nStrs.uploaderBrowse());
}

function onStartUpload_0(){
  $onStartUpload(this);
  this.button.setEnabled(false);
  this.button.removeStyleName('changed');
}

function setAutoSubmit_0(b){
  this.button.setVisible(!b);
  this.autoSubmit = b;
}

function setEnabled_4(b){
  this.enabled = b;
  !!this.fileInput && this.fileInput.setEnabled(b);
  this.button.setEnabled(b);
}

function setI18Constants_2(strs){
  this.i18nStrs = strs;
  this.fileInput.setText(strs.uploaderBrowse());
  this.statusWidget.setI18Constants(strs);
  this.button.setText(strs.uploaderSend());
}

function SingleUploader(){
}

_ = SingleUploader.prototype = new Uploader;
_.getClass$ = getClass_228;
_.onChangeInput = onChangeInput_0;
_.onFinishUpload = onFinishUpload_0;
_.onStartUpload = onStartUpload_0;
_.setAutoSubmit = setAutoSubmit_0;
_.setEnabled = setEnabled_4;
_.setI18Constants_0 = setI18Constants_2;
_.typeId$ = 151;
_.button = null;
function $SingleUploader$1(this$static, val$thisInstance){
  this$static.val$thisInstance = val$thisInstance;
  return this$static;
}

function getClass_229(){
  return Lgwtupload_client_SingleUploader$1_2_classLit;
}

function onClick_3(event_0){
  $submit_0(this.val$thisInstance.uploadForm);
}

function SingleUploader$1(){
}

_ = SingleUploader$1.prototype = new Object_0;
_.getClass$ = getClass_229;
_.onClick = onClick_3;
_.typeId$ = 152;
_.val$thisInstance = null;
function $clinit_402(){
  $clinit_402 = nullMethod;
  $clinit_34();
}

function $UpdateTimer(this$static, updateable, periodMillis){
  $clinit_402();
  this$static.delayedStarter = $UpdateTimer$1(new UpdateTimer$1, this$static);
  this$static.updateable = updateable;
  this$static.interval = periodMillis;
  this$static.thisInstance = this$static;
  return this$static;
}

function $squeduleStart(this$static){
  $schedule(this$static.delayedStarter, this$static.interval);
}

function $start(this$static){
  $scheduleRepeating(this$static, this$static.interval);
}

function cancel_1(){
  $cancel_0(this);
}

function getClass_230(){
  return Lgwtupload_client_UpdateTimer_2_classLit;
}

function run_4(){
  $update_0(this.updateable);
}

function UpdateTimer(){
}

_ = UpdateTimer.prototype = new Timer;
_.cancel = cancel_1;
_.getClass$ = getClass_230;
_.run = run_4;
_.typeId$ = 153;
_.interval = 1500;
_.thisInstance = null;
_.updateable = null;
function $clinit_403(){
  $clinit_403 = nullMethod;
  $clinit_34();
}

function $UpdateTimer$1(this$static, this$0){
  $clinit_403();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_231(){
  return Lgwtupload_client_UpdateTimer$1_2_classLit;
}

function run_5(){
  $start(this.this$0.thisInstance);
}

function UpdateTimer$1(){
}

_ = UpdateTimer$1.prototype = new Timer;
_.getClass$ = getClass_231;
_.run = run_5;
_.typeId$ = 154;
_.this$0 = null;
function $clinit_404(){
  $clinit_404 = nullMethod;
  $clinit_34();
}

function $Uploader$1(this$static, this$0){
  $clinit_404();
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_232(){
  return Lgwtupload_client_Uploader$1_2_classLit;
}

function run_6(){
  if ($isTheFirstInQueue(this.this$0)) {
    $cancel_0(this);
    this.firstTime = true;
    this.this$0.statusWidget.setStatus(($clinit_375() , SUBMITING));
    this.this$0.statusWidget.setVisible(true);
    $submit_0(this.this$0.uploadForm);
  }
   else if (this.firstTime) {
    $addToQueue(this.this$0);
    this.firstTime = false;
  }
}

function Uploader$1(){
}

_ = Uploader$1.prototype = new Timer;
_.getClass$ = getClass_232;
_.run = run_6;
_.typeId$ = 155;
_.firstTime = true;
_.this$0 = null;
function $Uploader$10(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onSubmit(this$static, event_0){
  var $e0;
  if (!this$static.this$0.finished && this$static.this$0.uploading) {
    this$static.this$0.uploading = false;
    this$static.this$0.statusWidget.setStatus(($clinit_375() , CANCELED));
    return;
  }
  if (!this$static.this$0.autoSubmit && ($clinit_399() , fileQueue).arrayList.size > 0) {
    this$static.this$0.statusWidget.setError(this$static.this$0.i18nStrs.uploaderActiveUpload());
    event_0.canceled = true;
    return;
  }
  if (this$static.this$0.avoidRepeatedFiles && $containsKey(($clinit_399() , fileDone).map, this$static.this$0.fileInput.getFilename())) {
    this$static.this$0.statusWidget.setStatus(($clinit_375() , REPEATED));
    this$static.this$0.successful = true;
    event_0.canceled = true;
    $uploadFinished(this$static.this$0);
    return;
  }
  if (this$static.this$0.basename == null || !$validateExtension(this$static.this$0, this$static.this$0.basename)) {
    event_0.canceled = true;
    return;
  }
  if (!this$static.this$0.hasSession) {
    event_0.canceled = true;
    try {
      $sendAjaxRequestToValidateSession(this$static.this$0);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 2)) {
        log('Exception in validateSession', null);
      }
       else 
        throw $e0;
    }
    return;
  }
  if (this$static.this$0.blobstore && !this$static.this$0.receivedBlobPath) {
    event_0.canceled = true;
    try {
      $sendAjaxRequestToGetBlobstorePath(this$static.this$0);
    }
     catch ($e0) {
      $e0 = caught_0($e0);
      if (instanceOf($e0, 2)) {
        log('Exception in getblobstorePath', null);
      }
       else 
        throw $e0;
    }
    return;
  }
  this$static.this$0.receivedBlobPath = false;
  $addToQueue(this$static.this$0);
  this$static.this$0.uploading = true;
  this$static.this$0.finished = false;
  this$static.this$0.serverResponse = null;
  if (this$static.this$0.autoSubmit) {
    $schedule($Uploader$10$1(new Uploader$10$1, this$static), 200);
  }
   else {
    this$static.this$0.statusWidget.setVisible(true);
    $squeduleStart(this$static.this$0.updateStatusTimer);
    this$static.this$0.statusWidget.setStatus(($clinit_375() , INPROGRESS));
    this$static.this$0.lastData = ($clinit_399() , fromDouble($getTime0($Date(new Date_0))));
  }
}

function getClass_233(){
  return Lgwtupload_client_Uploader$10_2_classLit;
}

function Uploader$10(){
}

_ = Uploader$10.prototype = new Object_0;
_.getClass$ = getClass_233;
_.typeId$ = 156;
_.this$0 = null;
function $clinit_406(){
  $clinit_406 = nullMethod;
  $clinit_34();
}

function $Uploader$10$1(this$static, this$1){
  $clinit_406();
  this$static.this$1 = this$1;
  return this$static;
}

function getClass_234(){
  return Lgwtupload_client_Uploader$10$1_2_classLit;
}

function run_7(){
  this.this$1.this$0.statusWidget.setVisible(true);
  $start(this.this$1.this$0.updateStatusTimer);
  this.this$1.this$0.statusWidget.setStatus(($clinit_375() , INPROGRESS));
  this.this$1.this$0.lastData = ($clinit_399() , fromDouble($getTime0($Date(new Date_0))));
}

function Uploader$10$1(){
}

_ = Uploader$10$1.prototype = new Timer;
_.getClass$ = getClass_234;
_.run = run_7;
_.typeId$ = 157;
_.this$1 = null;
function $Uploader$11(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $onStatusChanged(this$static){
  var handler, handler$iterator;
  for (handler$iterator = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.this$0.onStatusChangeHandlers.arrayList); handler$iterator.i < handler$iterator.this$0.size_0();) {
    handler = dynamicCast($next_5(handler$iterator), 76);
    handler.onStatusChanged(this$static.this$0.thisInstance);
  }
}

function getClass_235(){
  return Lgwtupload_client_Uploader$11_2_classLit;
}

function Uploader$11(){
}

_ = Uploader$11.prototype = new Object_0;
_.getClass$ = getClass_235;
_.typeId$ = 158;
_.this$0 = null;
function $Uploader$12(this$static, this$0, val$handler){
  this$static.this$0 = this$0;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_236(){
  return Lgwtupload_client_Uploader$12_2_classLit;
}

function onCancel(){
  $onCancel_0(this.val$handler, this.this$0.thisInstance);
}

function Uploader$12(){
}

_ = Uploader$12.prototype = new Object_0;
_.getClass$ = getClass_236;
_.onCancel = onCancel;
_.typeId$ = 159;
_.this$0 = null;
_.val$handler = null;
function $Uploader$13(this$static, this$0, val$handler){
  this$static.this$0 = this$0;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_237(){
  return Lgwtupload_client_Uploader$13_2_classLit;
}

function removeHandler_2(){
  $remove_10(this.this$0.onChangeHandlers, this.val$handler);
}

function Uploader$13(){
}

_ = Uploader$13.prototype = new Object_0;
_.getClass$ = getClass_237;
_.removeHandler = removeHandler_2;
_.typeId$ = 160;
_.this$0 = null;
_.val$handler = null;
function $Uploader$14(this$static, this$0, val$handler){
  this$static.this$0 = this$0;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_238(){
  return Lgwtupload_client_Uploader$14_2_classLit;
}

function removeHandler_3(){
  $remove_10(this.this$0.onFinishHandlers, this.val$handler);
}

function Uploader$14(){
}

_ = Uploader$14.prototype = new Object_0;
_.getClass$ = getClass_238;
_.removeHandler = removeHandler_3;
_.typeId$ = 161;
_.this$0 = null;
_.val$handler = null;
function $Uploader$15(this$static, this$0, val$handler){
  this$static.this$0 = this$0;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_239(){
  return Lgwtupload_client_Uploader$15_2_classLit;
}

function removeHandler_4(){
  $remove_10(this.this$0.onStartHandlers, this.val$handler);
}

function Uploader$15(){
}

_ = Uploader$15.prototype = new Object_0;
_.getClass$ = getClass_239;
_.removeHandler = removeHandler_4;
_.typeId$ = 162;
_.this$0 = null;
_.val$handler = null;
function $Uploader$16(this$static, this$0, val$handler){
  this$static.this$0 = this$0;
  this$static.val$handler = val$handler;
  return this$static;
}

function getClass_240(){
  return Lgwtupload_client_Uploader$16_2_classLit;
}

function removeHandler_5(){
  $remove_10(this.this$0.onStatusChangeHandlers, this.val$handler);
}

function Uploader$16(){
}

_ = Uploader$16.prototype = new Object_0;
_.getClass$ = getClass_240;
_.removeHandler = removeHandler_5;
_.typeId$ = 163;
_.this$0 = null;
_.val$handler = null;
function $Uploader$2(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_241(){
  return Lgwtupload_client_Uploader$2_2_classLit;
}

function onCancel_0(){
  $cancel_2(this.this$0);
}

function Uploader$2(){
}

_ = Uploader$2.prototype = new Object_0;
_.getClass$ = getClass_241;
_.onCancel = onCancel_0;
_.typeId$ = 164;
_.this$0 = null;
function $Uploader$3(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_242(){
  return Lgwtupload_client_Uploader$3_2_classLit;
}

function onError(request, exception){
  var message;
  message = $replaceAll(exception.getMessage(), '<[^>]+>', '');
  $cancelUpload(this.this$0, this.this$0.i18nStrs.uploaderServerUnavailable() + this.this$0.servletPath + '\n\n' + message);
}

function onResponseReceived(request, response){
  var $e0, e, text, url;
  text = response.val$xmlHttpRequest.responseText;
  url = null;
  try {
    url = getXmlNodeValue(($clinit_333() , $parse(impl_0, text)), 'blobpath');
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 77)) {
      text.indexOf('<blobpath>') != -1 && (url = $replaceAll($replaceAll($replaceAll(text, '[\r\n]+', ''), '^.*<blobpath>\\s*', ''), '\\s*<\/blobpath>.*$', ''));
    }
     else if (instanceOf($e0, 2)) {
      e = $e0;
      $cancelUpload(this.this$0, this.this$0.i18nStrs.uploaderBlobstoreError() + '\n>>>\n' + e.getMessage() + '\n>>>>\n' + e);
      return;
    }
     else 
      throw $e0;
  }
  url != null && url.length > 0 && !$equalsIgnoreCase('null', url) && (this.this$0.uploadForm.element_0.action = url , undefined);
  this.this$0.receivedBlobPath = true;
  $submit_0(this.this$0.uploadForm);
}

function Uploader$3(){
}

_ = Uploader$3.prototype = new Object_0;
_.getClass$ = getClass_242;
_.onError = onError;
_.onResponseReceived = onResponseReceived;
_.typeId$ = 0;
_.this$0 = null;
function $Uploader$4(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_243(){
  return Lgwtupload_client_Uploader$4_2_classLit;
}

function onError_0(request, exception){
  log('onCancelReceivedCallback onError: ', exception);
  this.this$0.statusWidget.setStatus(($clinit_375() , CANCELED));
}

function onResponseReceived_0(request, response){
  this.this$0.statusWidget.getStatus() == ($clinit_375() , CANCELING) && $scheduleRepeating(this.this$0.updateStatusTimer, 3000);
}

function Uploader$4(){
}

_ = Uploader$4.prototype = new Object_0;
_.getClass$ = getClass_243;
_.onError = onError_0;
_.onResponseReceived = onResponseReceived_0;
_.typeId$ = 0;
_.this$0 = null;
function $Uploader$5(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_244(){
  return Lgwtupload_client_Uploader$5_2_classLit;
}

function onError_1(request, exception){
  this.this$0.statusWidget.setStatus(($clinit_375() , DELETED));
  log('onCancelReceivedCallback onError: ', exception);
}

function onResponseReceived_1(request, response){
  this.this$0.statusWidget.setStatus(($clinit_375() , DELETED));
  $remove_11(($clinit_399() , fileDone).map, this.this$0.fileInput.getFilename()) != null;
}

function Uploader$5(){
}

_ = Uploader$5.prototype = new Object_0;
_.getClass$ = getClass_244;
_.onError = onError_1;
_.onResponseReceived = onResponseReceived_1;
_.typeId$ = 0;
_.this$0 = null;
function $Uploader$6(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_245(){
  return Lgwtupload_client_Uploader$6_2_classLit;
}

function onChange_0(event_0){
  this.this$0.basename = $replaceAll(this.this$0.fileInput.getFilename(), '^.*[/\\\\]', '');
  this.this$0.statusWidget.setFileName(this.this$0.basename);
  if (this.this$0.avoidRepeatedFiles && $containsKey(($clinit_399() , fileDone).map, this.this$0.fileInput.getFilename())) {
    this.this$0.statusWidget.setStatus(($clinit_375() , REPEATED));
    return;
  }
  this.this$0.autoSubmit && $validateExtension(this.this$0, this.this$0.basename) && this.this$0.basename.length > 0 && $scheduleRepeating(this.this$0.automaticUploadTimer, 600);
  this.this$0.onChangeInput();
}

function Uploader$6(){
}

_ = Uploader$6.prototype = new Object_0;
_.getClass$ = getClass_245;
_.onChange = onChange_0;
_.typeId$ = 165;
_.this$0 = null;
function $Uploader$7(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_246(){
  return Lgwtupload_client_Uploader$7_2_classLit;
}

function onError_2(request, exception){
  var message;
  message = $replaceAll(exception.getMessage(), '<[^>]+>', '');
  $cancelUpload(this.this$0, this.this$0.i18nStrs.uploaderServerUnavailable() + this.this$0.servletPath + '\n\n' + message);
}

function onResponseReceived_2(request, response){
  var $e0, e, message, s;
  this.this$0.hasSession = true;
  try {
    s = getXmlNodeValue(($clinit_333() , $parse(impl_0, response.val$xmlHttpRequest.responseText)), 'blobstore');
    this.this$0.blobstore = $equalsIgnoreCase('true', s);
    $submit_0(this.this$0.uploadForm);
  }
   catch ($e0) {
    $e0 = caught_0($e0);
    if (instanceOf($e0, 2)) {
      e = $e0;
      message = this.this$0.i18nStrs.uploaderServerError() + '\nAction: ' + this.this$0.servletPath + '\nException: ' + e.getMessage() + response.val$xmlHttpRequest.responseText;
      $cancelUpload(this.this$0, this.this$0.i18nStrs.uploaderServerUnavailable() + this.this$0.servletPath + '\n\n' + message);
    }
     else 
      throw $e0;
  }
}

function Uploader$7(){
}

_ = Uploader$7.prototype = new Object_0;
_.getClass$ = getClass_246;
_.onError = onError_2;
_.onResponseReceived = onResponseReceived_2;
_.typeId$ = 0;
_.this$0 = null;
function $Uploader$8(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_247(){
  return Lgwtupload_client_Uploader$8_2_classLit;
}

function onError_3(request, exception){
  var message;
  this.this$0.waitingForResponse = false;
  if (exception != null && canCast(exception.typeId$, 78)) {
    log('GWTUpload: onStatusReceivedCallback timeout error, asking the server again.', null);
  }
   else {
    log('GWTUpload: onStatusReceivedCallback error: ' + exception.getMessage(), exception);
    $cancel_0(this.this$0.updateStatusTimer);
    message = $replaceAll(exception.getMessage(), '<[^>]+>', '');
    message += '\n' + exception.getClass$().typeName;
    message += '\n' + $toString_0(exception);
    this.this$0.statusWidget.setError(this.this$0.i18nStrs.uploaderServerUnavailable() + this.this$0.servletPath + '\n\n' + message);
  }
}

function onResponseReceived_3(request, response){
  this.this$0.waitingForResponse = false;
  if (this.this$0.finished && !this.this$0.uploading) {
    return;
  }
  $parseAjaxResponse(this.this$0, response.val$xmlHttpRequest.responseText);
}

function Uploader$8(){
}

_ = Uploader$8.prototype = new Object_0;
_.getClass$ = getClass_247;
_.onError = onError_3;
_.onResponseReceived = onResponseReceived_3;
_.typeId$ = 0;
_.this$0 = null;
function $Uploader$9(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_248(){
  return Lgwtupload_client_Uploader$9_2_classLit;
}

function Uploader$9(){
}

_ = Uploader$9.prototype = new Object_0;
_.getClass$ = getClass_248;
_.typeId$ = 166;
_.this$0 = null;
function $Uploader$FormFlowPanel(this$static){
  $FormPanel(this$static, $createElement(($clinit_56() , $doc), 'form'), true);
  this$static.formElements = $FlowPanel(new FlowPanel);
  $add(this$static, this$static.formElements);
  this$static.formElements.getStyleElement()['className'] = 'upld-form-elements';
  return this$static;
}

function add_10(w){
  $add_7(this.formElements, w);
}

function getClass_249(){
  return Lgwtupload_client_Uploader$FormFlowPanel_2_classLit;
}

function Uploader$FormFlowPanel(){
}

_ = Uploader$FormFlowPanel.prototype = new FormPanel;
_.add = add_10;
_.getClass$ = getClass_249;
_.typeId$ = 167;
function $ArithmeticException(this$static, explanation){
  $fillInStackTrace();
  this$static.detailMessage = explanation;
  return this$static;
}

function getClass_250(){
  return Ljava_lang_ArithmeticException_2_classLit;
}

function ArithmeticException(){
}

_ = ArithmeticException.prototype = new RuntimeException;
_.getClass$ = getClass_250;
_.typeId$ = 168;
function $ArrayStoreException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_251(){
  return Ljava_lang_ArrayStoreException_2_classLit;
}

function ArrayStoreException(){
}

_ = ArrayStoreException.prototype = new RuntimeException;
_.getClass$ = getClass_251;
_.typeId$ = 169;
function digit(c, radix){
  if (radix < 2 || radix > 36) {
    return -1;
  }
  if (c >= 48 && c < 48 + (radix < 10?radix:10)) {
    return c - 48;
  }
  if (c >= 97 && c < radix + 97 - 10) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < radix + 65 - 10) {
    return c - 65 + 10;
  }
  return -1;
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function createForArray(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = 4;
  return clazz;
}

function createForClass(packageName, className){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  return clazz;
}

function createForEnum(packageName, className, superclass, enumConstantsFunc){
  var clazz;
  clazz = new Class;
  clazz.typeName = packageName + className;
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumSuperclass = superclass;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function getClass_252(){
  return Ljava_lang_Class_2_classLit;
}

function toString_17(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + this.typeName;
}

function Class(){
}

_ = Class.prototype = new Object_0;
_.getClass$ = getClass_252;
_.toString$ = toString_17;
_.typeId$ = 0;
_.enumConstantsFunc = null;
_.enumSuperclass = null;
_.modifiers = 0;
_.typeName = null;
function $ClassCastException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_253(){
  return Ljava_lang_ClassCastException_2_classLit;
}

function ClassCastException(){
}

_ = ClassCastException.prototype = new RuntimeException;
_.getClass$ = getClass_253;
_.typeId$ = 172;
function __parseAndValidateInt(s, radix, lowerBound, upperBound){
  var i, length_0, startIndex, toReturn;
  if (s == null) {
    throw $NumberFormatException(new NumberFormatException, 'null');
  }
  if (radix < 2 || radix > 36) {
    throw $NumberFormatException(new NumberFormatException, 'radix ' + radix + ' out of range');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && s.charCodeAt(0) == 45?1:0;
  for (i = startIndex; i < length_0; ++i) {
    if (digit(s.charCodeAt(i), radix) == -1) {
      throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, radix);
  if (isNaN(toReturn)) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
   else if (toReturn < lowerBound || toReturn > upperBound) {
    throw $NumberFormatException(new NumberFormatException, 'For input string: "' + s + '"');
  }
  return toReturn;
}

function getClass_254(){
  return Ljava_lang_Number_2_classLit;
}

function Number_0(){
}

_ = Number_0.prototype = new Object_0;
_.getClass$ = getClass_254;
_.typeId$ = 173;
function $IllegalArgumentException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $IllegalArgumentException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_255(){
  return Ljava_lang_IllegalArgumentException_2_classLit;
}

function IllegalArgumentException(){
}

_ = IllegalArgumentException.prototype = new RuntimeException;
_.getClass$ = getClass_255;
_.typeId$ = 174;
function $IllegalStateException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $IllegalStateException_0(this$static, s){
  $fillInStackTrace();
  this$static.detailMessage = s;
  return this$static;
}

function getClass_256(){
  return Ljava_lang_IllegalStateException_2_classLit;
}

function IllegalStateException(){
}

_ = IllegalStateException.prototype = new RuntimeException;
_.getClass$ = getClass_256;
_.typeId$ = 175;
function $IndexOutOfBoundsException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $IndexOutOfBoundsException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_257(){
  return Ljava_lang_IndexOutOfBoundsException_2_classLit;
}

function IndexOutOfBoundsException(){
}

_ = IndexOutOfBoundsException.prototype = new RuntimeException;
_.getClass$ = getClass_257;
_.typeId$ = 176;
function $Integer(this$static, value){
  this$static.value_0 = value;
  return this$static;
}

function equals_3(o){
  return o != null && canCast(o.typeId$, 42) && dynamicCast(o, 42).value_0 == this.value_0;
}

function getClass_258(){
  return Ljava_lang_Integer_2_classLit;
}

function hashCode_5(){
  return this.value_0;
}

function toPowerOfTwoString(value, shift){
  var bitMask, buf, bufSize, digits, pos;
  bufSize = ~~(32 / shift);
  bitMask = (1 << shift) - 1;
  buf = initDim(_3C_classLit, 215, -1, bufSize, 1);
  digits = ($clinit_442() , digits_0);
  pos = bufSize - 1;
  if (value >= 0) {
    while (value > bitMask) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
   else {
    while (pos > 0) {
      buf[pos--] = digits[value & bitMask];
      value >>= shift;
    }
  }
  buf[pos] = digits[value & bitMask];
  return __valueOf(buf, pos, bufSize);
}

function toString_18(){
  return '' + this.value_0;
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_438() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = $Integer(new Integer, i));
    return result;
  }
  return $Integer(new Integer, i);
}

function Integer(){
}

_ = Integer.prototype = new Number_0;
_.equals$ = equals_3;
_.getClass$ = getClass_258;
_.hashCode$ = hashCode_5;
_.toString$ = toString_18;
_.typeId$ = 177;
_.value_0 = 0;
function $clinit_438(){
  $clinit_438 = nullMethod;
  boxedValues_0 = initDim(_3Ljava_lang_Integer_2_classLit, 236, 42, 256, 0);
}

var boxedValues_0;
function max_0(x, y){
  return x > y?x:y;
}

function max_1(x, y){
  return x > y?x:y;
}

function min_0(x, y){
  return x < y?x:y;
}

function min_1(x, y){
  return x < y?x:y;
}

function $NullPointerException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $NullPointerException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_259(){
  return Ljava_lang_NullPointerException_2_classLit;
}

function NullPointerException(){
}

_ = NullPointerException.prototype = new RuntimeException;
_.getClass$ = getClass_259;
_.typeId$ = 178;
function $clinit_442(){
  $clinit_442 = nullMethod;
  digits_0 = initValues(_3C_classLit, 215, -1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
}

var digits_0;
function $NumberFormatException(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_260(){
  return Ljava_lang_NumberFormatException_2_classLit;
}

function NumberFormatException(){
}

_ = NumberFormatException.prototype = new IllegalArgumentException;
_.getClass$ = getClass_260;
_.typeId$ = 179;
function $StackTraceElement(this$static, className, methodName, fileName, lineNumber){
  this$static.className_0 = className;
  this$static.methodName = methodName;
  this$static.fileName = fileName;
  this$static.lineNumber = lineNumber;
  return this$static;
}

function getClass_261(){
  return Ljava_lang_StackTraceElement_2_classLit;
}

function toString_19(){
  return this.className_0 + '.' + this.methodName + '(' + this.fileName + ':' + this.lineNumber + ')';
}

function StackTraceElement(){
}

_ = StackTraceElement.prototype = new Object_0;
_.getClass$ = getClass_261;
_.toString$ = toString_19;
_.typeId$ = 180;
_.className_0 = null;
_.fileName = null;
_.lineNumber = 0;
_.methodName = null;
function $equals_1(this$static, other){
  if (!(other != null && canCast(other.typeId$, 1))) {
    return false;
  }
  return String(this$static) == other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null)
    return false;
  return this$static == other || this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $matches(this$static, regex){
  var matchObj = (new RegExp(regex)).exec(this$static);
  return matchObj == null?false:this$static == matchObj[0];
}

function $replaceAll(this$static, regex, replace){
  replace = __translateReplaceString(replace);
  return this$static.replace(RegExp(regex, 'g'), replace);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = initDim(_3Ljava_lang_String_2_classLit, 240, 1, out.length, 0);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex, this$static.length - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  var r1 = this$static.replace(/^(\s*)/, '');
  var r2 = r1.replace(/\s*$/, '');
  return r2;
}

function __translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos - 0) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos - 0) + $substring(replaceStr, ++pos));
  }
  return replaceStr;
}

function __valueOf(x, start, end){
  x = x.slice(start, end);
  return String.fromCharCode.apply(null, x);
}

function equals_4(other){
  return $equals_1(this, other);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= 65536) {
    hiSurrogate = 55296 + (codePoint - 65536 >> 10 & 1023) & 65535;
    loSurrogate = 56320 + (codePoint - 65536 & 1023) & 65535;
    return String.fromCharCode(hiSurrogate) + String.fromCharCode(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & 65535);
  }
}

function getClass_262(){
  return Ljava_lang_String_2_classLit;
}

function hashCode_6(){
  return getHashCode_0(this);
}

function toString_20(){
  return this;
}

_ = String.prototype;
_.equals$ = equals_4;
_.getClass$ = getClass_262;
_.hashCode$ = hashCode_6;
_.toString$ = toString_20;
_.typeId$ = 2;
function $clinit_446(){
  $clinit_446 = nullMethod;
  back = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode))) | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + str.charCodeAt(i++);
  }
  return hashCode | 0;
}

function getHashCode_0(str){
  $clinit_446();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back, count_0 = 0, front;
function $StringBuffer(this$static){
  var array;
  this$static.data_0 = (array = [] , array.explicitLength = 0 , array);
  return this$static;
}

function $StringBuffer_0(this$static, s){
  var array;
  this$static.data_0 = (array = [] , array.explicitLength = 0 , array);
  $append(this$static.data_0, s);
  return this$static;
}

function $append_0(this$static, x){
  $append(this$static.data_0, x);
  return this$static;
}

function getClass_263(){
  return Ljava_lang_StringBuffer_2_classLit;
}

function toString_21(){
  return $toString_2(this.data_0);
}

function StringBuffer(){
}

_ = StringBuffer.prototype = new Object_0;
_.getClass$ = getClass_263;
_.toString$ = toString_21;
_.typeId$ = 181;
function $UnsupportedOperationException(this$static){
  $fillInStackTrace();
  return this$static;
}

function $UnsupportedOperationException_0(this$static, message){
  $fillInStackTrace();
  this$static.detailMessage = message;
  return this$static;
}

function getClass_264(){
  return Ljava_lang_UnsupportedOperationException_2_classLit;
}

function UnsupportedOperationException(){
}

_ = UnsupportedOperationException.prototype = new RuntimeException;
_.getClass$ = getClass_264;
_.typeId$ = 182;
function $advanceToFind(iter, o){
  var t;
  while (iter.hasNext()) {
    t = iter.next_0();
    if (o == null?t == null:equals__devirtual$(o, t)) {
      return iter;
    }
  }
  return null;
}

function $remove_10(this$static, o){
  var iter;
  iter = $advanceToFind($AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this$static.arrayList), o);
  if (iter) {
    iter.remove_0();
    return true;
  }
   else {
    return false;
  }
}

function $toArray(this$static, a){
  var i, it, result, size, outerIter, entry;
  size = this$static.map.size;
  a.length < size && (a = createFrom(a, size));
  result = a;
  it = (outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $keySet(this$static.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter));
  for (i = 0; i < size; ++i) {
    setCheck(result, i, (entry = $next_4(it.val$outerIter) , entry.getKey()));
  }
  a.length > size && setCheck(a, size, null);
  return a;
}

function $toString_7(this$static){
  var comma, iter, sb;
  sb = $StringBuffer(new StringBuffer);
  comma = null;
  $append(sb.data_0, '[');
  iter = this$static.iterator_0();
  while (iter.hasNext()) {
    comma != null?$append(sb.data_0, comma):(comma = ', ');
    $append_0(sb, '' + iter.next_0());
  }
  $append(sb.data_0, ']');
  return $toString_2(sb.data_0);
}

function add_11(o){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Add not supported on this collection');
}

function contains(o){
  var iter;
  iter = $advanceToFind(this.iterator_0(), o);
  return !!iter;
}

function getClass_265(){
  return Ljava_util_AbstractCollection_2_classLit;
}

function toString_22(){
  return $toString_7(this);
}

function AbstractCollection(){
}

_ = AbstractCollection.prototype = new Object_0;
_.add_0 = add_11;
_.contains_0 = contains;
_.getClass$ = getClass_265;
_.toString$ = toString_22;
_.typeId$ = 0;
function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this$static).this$0); $hasNext_3(iter.iter);) {
    entry = iter.last = dynamicCast($next_5(iter.iter), 53);
    k = entry.getKey();
    if (key == null?k == null:equals__devirtual$(key, k)) {
      remove && $remove_12(iter);
      return entry;
    }
  }
  return null;
}

function $keySet(this$static){
  var entrySet;
  entrySet = $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this$static);
  return $AbstractMap$1(new AbstractMap$1, this$static, entrySet);
}

function equals_5(obj){
  var entry, entry$iterator, otherKey, otherMap, otherValue;
  if ((obj == null?null:obj) === this) {
    return true;
  }
  if (!(obj != null && canCast(obj.typeId$, 79))) {
    return false;
  }
  otherMap = dynamicCast(obj, 79);
  if (dynamicCast(this, 80).size != otherMap.size_0()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator_0(); entry$iterator.hasNext();) {
    entry = dynamicCast(entry$iterator.next_0(), 53);
    otherKey = entry.getKey();
    otherValue = entry.getValue();
    if (!(otherKey == null?dynamicCast(this, 80).nullSlotLive:otherKey != null && canCast(otherKey.typeId$, 1)?$hasStringValue(dynamicCast(this, 80), dynamicCast(otherKey, 1)):$hasHashValue(dynamicCast(this, 80), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
    if (!equalsWithNullCheck(otherValue, otherKey == null?dynamicCast(this, 80).nullSlot:otherKey != null && canCast(otherKey.typeId$, 1)?dynamicCast(this, 80).stringMap[':' + dynamicCast(otherKey, 1)]:$getHashValue(dynamicCast(this, 80), otherKey, ~~hashCode__devirtual$(otherKey)))) {
      return false;
    }
  }
  return true;
}

function get_2(key){
  var entry;
  entry = $implFindEntry(this, key, false);
  return !entry?null:entry.getValue();
}

function getClass_266(){
  return Ljava_util_AbstractMap_2_classLit;
}

function hashCode_7(){
  var entry, entry$iterator, hashCode;
  hashCode = 0;
  for (entry$iterator = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 80)).this$0); $hasNext_3(entry$iterator.iter);) {
    entry = entry$iterator.last = dynamicCast($next_5(entry$iterator.iter), 53);
    hashCode += entry.hashCode$();
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function put(key, value){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Put not supported on this map');
}

function size_0(){
  return $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 80)).this$0.size;
}

function toString_23(){
  var comma, entry, iter, s;
  s = '{';
  comma = false;
  for (iter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, dynamicCast(this, 80)).this$0); $hasNext_3(iter.iter);) {
    entry = iter.last = dynamicCast($next_5(iter.iter), 53);
    comma?(s += ', '):(comma = true);
    s += '' + entry.getKey();
    s += '=';
    s += '' + entry.getValue();
  }
  return s + '}';
}

function AbstractMap(){
}

_ = AbstractMap.prototype = new Object_0;
_.equals$ = equals_5;
_.get = get_2;
_.getClass$ = getClass_266;
_.hashCode$ = hashCode_7;
_.put = put;
_.size_0 = size_0;
_.toString$ = toString_23;
_.typeId$ = 183;
function $addAllHashEntries(this$static, dest){
  var hashCodeMap = this$static.hashCodeMap;
  for (var hashCode in hashCodeMap) {
    if (hashCode == parseInt(hashCode)) {
      var array = hashCodeMap[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        dest.add_0(array[i]);
      }
    }
  }
}

function $addAllStringEntries(this$static, dest){
  var stringMap = this$static.stringMap;
  for (var key in stringMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = new_$(this$static, key.substring(1));
      dest.add_0(entry);
    }
  }
}

function $clearImpl(this$static){
  this$static.hashCodeMap = [];
  this$static.stringMap = {};
  this$static.nullSlotLive = false;
  this$static.nullSlot = null;
  this$static.size = 0;
}

function $containsKey(this$static, key){
  return key == null?this$static.nullSlotLive:key != null && canCast(key.typeId$, 1)?$hasStringValue(this$static, dynamicCast(key, 1)):$hasHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $get_2(this$static, key){
  return key == null?this$static.nullSlot:key != null && canCast(key.typeId$, 1)?this$static.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $getHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return entry.getValue();
      }
    }
  }
  return null;
}

function $hasHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        return true;
      }
    }
  }
  return false;
}

function $hasStringValue(this$static, key){
  return ':' + key in this$static.stringMap;
}

function $put_0(this$static, key, value){
  return key == null?$putNullSlot(this$static, value):key != null && canCast(key.typeId$, 1)?$putStringValue(this$static, dynamicCast(key, 1), value):$putHashValue(this$static, key, value, ~~hashCode__devirtual$(key));
}

function $putHashValue(this$static, key, value, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        var previous = entry.getValue();
        entry.setValue(value);
        return previous;
      }
    }
  }
   else {
    array = this$static.hashCodeMap[hashCode] = [];
  }
  var entry = $MapEntryImpl(new MapEntryImpl, key, value);
  array.push(entry);
  ++this$static.size;
  return null;
}

function $putNullSlot(this$static, value){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = value;
  if (!this$static.nullSlotLive) {
    this$static.nullSlotLive = true;
    ++this$static.size;
  }
  return result;
}

function $putStringValue(this$static, key, value){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  key in stringMap?(result = stringMap[key]):++this$static.size;
  stringMap[key] = value;
  return result;
}

function $remove_11(this$static, key){
  return key == null?$removeNullSlot(this$static):key != null && canCast(key.typeId$, 1)?$removeStringValue(this$static, dynamicCast(key, 1)):$removeHashValue(this$static, key, ~~hashCode__devirtual$(key));
}

function $removeHashValue(this$static, key, hashCode){
  var array = this$static.hashCodeMap[hashCode];
  if (array) {
    for (var i = 0, c = array.length; i < c; ++i) {
      var entry = array[i];
      var entryKey = entry.getKey();
      if (this$static.equalsBridge(key, entryKey)) {
        array.length == 1?delete this$static.hashCodeMap[hashCode]:array.splice(i, 1);
        --this$static.size;
        return entry.getValue();
      }
    }
  }
  return null;
}

function $removeNullSlot(this$static){
  var result;
  result = this$static.nullSlot;
  this$static.nullSlot = null;
  if (this$static.nullSlotLive) {
    this$static.nullSlotLive = false;
    --this$static.size;
  }
  return result;
}

function $removeStringValue(this$static, key){
  var result, stringMap = this$static.stringMap;
  key = ':' + key;
  if (key in stringMap) {
    result = stringMap[key];
    --this$static.size;
    delete stringMap[key];
  }
  return result;
}

function entrySet_0(){
  return $AbstractHashMap$EntrySet(new AbstractHashMap$EntrySet, this);
}

function equalsBridge(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function get_3(key){
  return key == null?this.nullSlot:key != null && canCast(key.typeId$, 1)?this.stringMap[':' + dynamicCast(key, 1)]:$getHashValue(this, key, ~~hashCode__devirtual$(key));
}

function getClass_267(){
  return Ljava_util_AbstractHashMap_2_classLit;
}

function put_0(key, value){
  return key == null?$putNullSlot(this, value):key != null?$putStringValue(this, key, value):$putHashValue(this, key, value, ~~getHashCode_0(key));
}

function size_1(){
  return this.size;
}

function AbstractHashMap(){
}

_ = AbstractHashMap.prototype = new AbstractMap;
_.entrySet_0 = entrySet_0;
_.equalsBridge = equalsBridge;
_.get = get_3;
_.getClass$ = getClass_267;
_.put = put_0;
_.size_0 = size_1;
_.typeId$ = 184;
_.hashCodeMap = null;
_.nullSlot = null;
_.nullSlotLive = false;
_.size = 0;
_.stringMap = null;
function equals_6(o){
  var iter, other, otherItem;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 81))) {
    return false;
  }
  other = dynamicCast(o, 81);
  if (other.size_0() != this.size_0()) {
    return false;
  }
  for (iter = other.iterator_0(); iter.hasNext();) {
    otherItem = iter.next_0();
    if (!this.contains_0(otherItem)) {
      return false;
    }
  }
  return true;
}

function getClass_268(){
  return Ljava_util_AbstractSet_2_classLit;
}

function hashCode_8(){
  var hashCode, iter, next;
  hashCode = 0;
  for (iter = this.iterator_0(); iter.hasNext();) {
    next = iter.next_0();
    if (next != null) {
      hashCode += hashCode__devirtual$(next);
      hashCode = ~~hashCode;
    }
  }
  return hashCode;
}

function AbstractSet(){
}

_ = AbstractSet.prototype = new AbstractCollection;
_.equals$ = equals_6;
_.getClass$ = getClass_268;
_.hashCode$ = hashCode_8;
_.typeId$ = 185;
function $AbstractHashMap$EntrySet(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $contains(this$static, o){
  var entry, key, value;
  if (o != null && canCast(o.typeId$, 53)) {
    entry = dynamicCast(o, 53);
    key = entry.getKey();
    if ($containsKey(this$static.this$0, key)) {
      value = $get_2(this$static.this$0, key);
      return $equals_2(entry.getValue(), value);
    }
  }
  return false;
}

function contains_0(o){
  return $contains(this, o);
}

function getClass_269(){
  return Ljava_util_AbstractHashMap$EntrySet_2_classLit;
}

function iterator_8(){
  return $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.this$0);
}

function size_2(){
  return this.this$0.size;
}

function AbstractHashMap$EntrySet(){
}

_ = AbstractHashMap$EntrySet.prototype = new AbstractSet;
_.contains_0 = contains_0;
_.getClass$ = getClass_269;
_.iterator_0 = iterator_8;
_.size_0 = size_2;
_.typeId$ = 186;
_.this$0 = null;
function $AbstractHashMap$EntrySetIterator(this$static, this$0){
  var list;
  this$static.this$0 = this$0;
  list = $ArrayList(new ArrayList);
  this$static.this$0.nullSlotLive && $add_13(list, $AbstractHashMap$MapEntryNull(new AbstractHashMap$MapEntryNull, this$static.this$0));
  $addAllStringEntries(this$static.this$0, list);
  $addAllHashEntries(this$static.this$0, list);
  this$static.iter = $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, list);
  return this$static;
}

function $next_4(this$static){
  return this$static.last = dynamicCast($next_5(this$static.iter), 53);
}

function $remove_12(this$static){
  if (!this$static.last) {
    throw $IllegalStateException_0(new IllegalStateException, 'Must call next() before remove().');
  }
   else {
    $remove_13(this$static.iter);
    $remove_11(this$static.this$0, this$static.last.getKey());
    this$static.last = null;
  }
}

function getClass_270(){
  return Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit;
}

function hasNext_3(){
  return $hasNext_3(this.iter);
}

function next_4(){
  return this.last = dynamicCast($next_5(this.iter), 53);
}

function remove_14(){
  $remove_12(this);
}

function AbstractHashMap$EntrySetIterator(){
}

_ = AbstractHashMap$EntrySetIterator.prototype = new Object_0;
_.getClass$ = getClass_270;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.remove_0 = remove_14;
_.typeId$ = 0;
_.iter = null;
_.last = null;
_.this$0 = null;
function equals_7(other){
  var entry;
  if (other != null && canCast(other.typeId$, 53)) {
    entry = dynamicCast(other, 53);
    if (equalsWithNullCheck(this.getKey(), entry.getKey()) && equalsWithNullCheck(this.getValue(), entry.getValue())) {
      return true;
    }
  }
  return false;
}

function getClass_271(){
  return Ljava_util_AbstractMapEntry_2_classLit;
}

function hashCode_9(){
  var keyHash, valueHash;
  keyHash = 0;
  valueHash = 0;
  this.getKey() != null && (keyHash = hashCode__devirtual$(this.getKey()));
  this.getValue() != null && (valueHash = hashCode__devirtual$(this.getValue()));
  return keyHash ^ valueHash;
}

function toString_24(){
  return this.getKey() + '=' + this.getValue();
}

function AbstractMapEntry(){
}

_ = AbstractMapEntry.prototype = new Object_0;
_.equals$ = equals_7;
_.getClass$ = getClass_271;
_.hashCode$ = hashCode_9;
_.toString$ = toString_24;
_.typeId$ = 187;
function $AbstractHashMap$MapEntryNull(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_272(){
  return Ljava_util_AbstractHashMap$MapEntryNull_2_classLit;
}

function getKey(){
  return null;
}

function getValue(){
  return this.this$0.nullSlot;
}

function setValue(object){
  return $putNullSlot(this.this$0, object);
}

function AbstractHashMap$MapEntryNull(){
}

_ = AbstractHashMap$MapEntryNull.prototype = new AbstractMapEntry;
_.getClass$ = getClass_272;
_.getKey = getKey;
_.getValue = getValue;
_.setValue = setValue;
_.typeId$ = 188;
_.this$0 = null;
function $AbstractHashMap$MapEntryString(this$static, key, this$0){
  this$static.this$0 = this$0;
  this$static.key = key;
  return this$static;
}

function getClass_273(){
  return Ljava_util_AbstractHashMap$MapEntryString_2_classLit;
}

function getKey_0(){
  return this.key;
}

function getValue_0(){
  return this.this$0.stringMap[':' + this.key];
}

function new_$(this$outer, key){
  return $AbstractHashMap$MapEntryString(new AbstractHashMap$MapEntryString, key, this$outer);
}

function setValue_0(object){
  return $putStringValue(this.this$0, this.key, object);
}

function AbstractHashMap$MapEntryString(){
}

_ = AbstractHashMap$MapEntryString.prototype = new AbstractMapEntry;
_.getClass$ = getClass_273;
_.getKey = getKey_0;
_.getValue = getValue_0;
_.setValue = setValue_0;
_.typeId$ = 189;
_.key = null;
_.this$0 = null;
function add_12(obj){
  this.add_1(this.size_0(), obj);
  return true;
}

function add_13(index, element){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Add not supported on this list');
}

function checkIndex(index, size){
  (index < 0 || index >= size) && indexOutOfBounds(index, size);
}

function equals_8(o){
  var elem, elemOther, iter, iterOther, other;
  if ((o == null?null:o) === this) {
    return true;
  }
  if (!(o != null && canCast(o.typeId$, 52))) {
    return false;
  }
  other = dynamicCast(o, 52);
  if (this.size_0() != other.size_0()) {
    return false;
  }
  iter = this.iterator_0();
  iterOther = other.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    elem = $next_5(iter);
    elemOther = iterOther.next_0();
    if (!(elem == null?elemOther == null:equals__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}

function getClass_274(){
  return Ljava_util_AbstractList_2_classLit;
}

function hashCode_10(){
  var iter, k, obj;
  k = 1;
  iter = this.iterator_0();
  while (iter.i < iter.this$0.size_0()) {
    obj = $next_5(iter);
    k = 31 * k + (obj == null?0:hashCode__devirtual$(obj));
    k = ~~k;
  }
  return k;
}

function indexOutOfBounds(index, size){
  throw $IndexOutOfBoundsException_0(new IndexOutOfBoundsException, 'Index: ' + index + ', Size: ' + size);
}

function iterator_9(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this);
}

function remove_15(index){
  throw $UnsupportedOperationException_0(new UnsupportedOperationException, 'Remove not supported on this list');
}

function AbstractList(){
}

_ = AbstractList.prototype = new AbstractCollection;
_.add_0 = add_12;
_.add_1 = add_13;
_.equals$ = equals_8;
_.getClass$ = getClass_274;
_.hashCode$ = hashCode_10;
_.iterator_0 = iterator_9;
_.remove_1 = remove_15;
_.typeId$ = 190;
function $AbstractList$IteratorImpl(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function $hasNext_3(this$static){
  return this$static.i < this$static.this$0.size_0();
}

function $next_5(this$static){
  if (this$static.i >= this$static.this$0.size_0()) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  return this$static.this$0.get_0(this$static.last = this$static.i++);
}

function $remove_13(this$static){
  if (this$static.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  this$static.this$0.remove_1(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function getClass_275(){
  return Ljava_util_AbstractList$IteratorImpl_2_classLit;
}

function hasNext_4(){
  return this.i < this.this$0.size_0();
}

function next_5(){
  return $next_5(this);
}

function remove_16(){
  $remove_13(this);
}

function AbstractList$IteratorImpl(){
}

_ = AbstractList$IteratorImpl.prototype = new Object_0;
_.getClass$ = getClass_275;
_.hasNext = hasNext_4;
_.next_0 = next_5;
_.remove_0 = remove_16;
_.typeId$ = 0;
_.i = 0;
_.last = -1;
_.this$0 = null;
function $AbstractMap$1(this$static, this$0, val$entrySet){
  this$static.this$0 = this$0;
  this$static.val$entrySet = val$entrySet;
  return this$static;
}

function contains_1(key){
  return $containsKey(this.this$0, key);
}

function getClass_276(){
  return Ljava_util_AbstractMap$1_2_classLit;
}

function iterator_10(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, this.val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_3(){
  return this.val$entrySet.this$0.size;
}

function AbstractMap$1(){
}

_ = AbstractMap$1.prototype = new AbstractSet;
_.contains_0 = contains_1;
_.getClass$ = getClass_276;
_.iterator_0 = iterator_10;
_.size_0 = size_3;
_.typeId$ = 191;
_.this$0 = null;
_.val$entrySet = null;
function $AbstractMap$1$1(this$static, val$outerIter){
  this$static.val$outerIter = val$outerIter;
  return this$static;
}

function getClass_277(){
  return Ljava_util_AbstractMap$1$1_2_classLit;
}

function hasNext_5(){
  return $hasNext_3(this.val$outerIter.iter);
}

function next_6(){
  var entry;
  return entry = $next_4(this.val$outerIter) , entry.getKey();
}

function remove_17(){
  $remove_12(this.val$outerIter);
}

function AbstractMap$1$1(){
}

_ = AbstractMap$1$1.prototype = new Object_0;
_.getClass$ = getClass_277;
_.hasNext = hasNext_5;
_.next_0 = next_6;
_.remove_0 = remove_17;
_.typeId$ = 0;
_.val$outerIter = null;
function $ArrayList(this$static){
  this$static.array = initDim(_3Ljava_lang_Object_2_classLit, 238, 0, 0, 0);
  return this$static;
}

function $add_13(this$static, o){
  setCheck(this$static.array, this$static.size++, o);
  return true;
}

function $add_14(this$static, index, o){
  (index < 0 || index > this$static.size) && indexOutOfBounds(index, this$static.size);
  this$static.array.splice(index, 0, o);
  ++this$static.size;
}

function $get_3(this$static, index){
  checkIndex(index, this$static.size);
  return this$static.array[index];
}

function $indexOf_2(this$static, o, index){
  for (; index < this$static.size; ++index) {
    if (equalsWithNullCheck(o, this$static.array[index])) {
      return index;
    }
  }
  return -1;
}

function $remove_14(this$static, index){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  this$static.array.splice(index, 1);
  --this$static.size;
  return previous;
}

function $remove_15(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  $remove_14(this$static, i);
  return true;
}

function $set_0(this$static, index, o){
  var previous;
  previous = (checkIndex(index, this$static.size) , this$static.array[index]);
  setCheck(this$static.array, index, o);
  return previous;
}

function $toArray_0(this$static, out){
  var i, a, result;
  out.length < this$static.size && (out = (a = out , result = createFromSeed(0, this$static.size) , initValues(a.arrayClass$, a.typeId$, a.queryId$, result) , result));
  for (i = 0; i < this$static.size; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > this$static.size && setCheck(out, this$static.size, null);
  return out;
}

function add_14(o){
  return setCheck(this.array, this.size++, o) , true;
}

function add_15(index, o){
  $add_14(this, index, o);
}

function contains_2(o){
  return $indexOf_2(this, o, 0) != -1;
}

function get_4(index){
  return checkIndex(index, this.size) , this.array[index];
}

function getClass_278(){
  return Ljava_util_ArrayList_2_classLit;
}

function remove_18(index){
  return $remove_14(this, index);
}

function size_4(){
  return this.size;
}

function ArrayList(){
}

_ = ArrayList.prototype = new AbstractList;
_.add_0 = add_14;
_.add_1 = add_15;
_.contains_0 = contains_2;
_.get_0 = get_4;
_.getClass$ = getClass_278;
_.remove_1 = remove_18;
_.size_0 = size_4;
_.typeId$ = 192;
_.size = 0;
function $clinit_465(){
  $clinit_465 = nullMethod;
  unmodifiableList($ArrayList(new ArrayList));
  $Collections$UnmodifiableMap(new Collections$UnmodifiableMap, $HashMap(new HashMap));
  $Collections$UnmodifiableCollection(new Collections$UnmodifiableSet, $HashSet(new HashSet));
}

function unmodifiableList(list){
  $clinit_465();
  return list != null && canCast(list.typeId$, 82)?$Collections$UnmodifiableRandomAccessList(new Collections$UnmodifiableRandomAccessList, list):$Collections$UnmodifiableList(new Collections$UnmodifiableList, list);
}

function $Collections$UnmodifiableCollection(this$static, coll){
  this$static.coll = coll;
  return this$static;
}

function add_16(o){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function contains_3(o){
  return this.coll.contains_0(o);
}

function getClass_279(){
  return Ljava_util_Collections$UnmodifiableCollection_2_classLit;
}

function iterator_11(){
  return $Collections$UnmodifiableCollectionIterator(new Collections$UnmodifiableCollectionIterator, this.coll.iterator_0());
}

function size_5(){
  return this.coll.size_0();
}

function toString_25(){
  return toString__devirtual$(this.coll);
}

function Collections$UnmodifiableCollection(){
}

_ = Collections$UnmodifiableCollection.prototype = new Object_0;
_.add_0 = add_16;
_.contains_0 = contains_3;
_.getClass$ = getClass_279;
_.iterator_0 = iterator_11;
_.size_0 = size_5;
_.toString$ = toString_25;
_.typeId$ = 0;
_.coll = null;
function $Collections$UnmodifiableCollectionIterator(this$static, it){
  this$static.it = it;
  return this$static;
}

function getClass_280(){
  return Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit;
}

function hasNext_6(){
  return this.it.hasNext();
}

function next_7(){
  return this.it.next_0();
}

function remove_19(){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(){
}

_ = Collections$UnmodifiableCollectionIterator.prototype = new Object_0;
_.getClass$ = getClass_280;
_.hasNext = hasNext_6;
_.next_0 = next_7;
_.remove_0 = remove_19;
_.typeId$ = 0;
_.it = null;
function $Collections$UnmodifiableList(this$static, list){
  this$static.coll = list;
  this$static.list = list;
  return this$static;
}

function equals_9(o){
  return this.list.equals$(o);
}

function get_5(index){
  return this.list.get_0(index);
}

function getClass_281(){
  return Ljava_util_Collections$UnmodifiableList_2_classLit;
}

function hashCode_11(){
  return this.list.hashCode$();
}

function Collections$UnmodifiableList(){
}

_ = Collections$UnmodifiableList.prototype = new Collections$UnmodifiableCollection;
_.equals$ = equals_9;
_.get_0 = get_5;
_.getClass$ = getClass_281;
_.hashCode$ = hashCode_11;
_.typeId$ = 193;
_.list = null;
function $Collections$UnmodifiableMap(this$static, map){
  this$static.map = map;
  return this$static;
}

function entrySet_1(){
  !this.entrySet && (this.entrySet = $Collections$UnmodifiableMap$UnmodifiableEntrySet(new Collections$UnmodifiableMap$UnmodifiableEntrySet, this.map.entrySet_0()));
  return this.entrySet;
}

function equals_10(o){
  return this.map.equals$(o);
}

function get_6(key){
  return this.map.get(key);
}

function getClass_282(){
  return Ljava_util_Collections$UnmodifiableMap_2_classLit;
}

function hashCode_12(){
  return this.map.hashCode$();
}

function put_1(key, value){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function size_6(){
  return this.map.size_0();
}

function toString_26(){
  return toString__devirtual$(this.map);
}

function Collections$UnmodifiableMap(){
}

_ = Collections$UnmodifiableMap.prototype = new Object_0;
_.entrySet_0 = entrySet_1;
_.equals$ = equals_10;
_.get = get_6;
_.getClass$ = getClass_282;
_.hashCode$ = hashCode_12;
_.put = put_1;
_.size_0 = size_6;
_.toString$ = toString_26;
_.typeId$ = 194;
_.entrySet = null;
_.map = null;
function equals_11(o){
  return this.coll.equals$(o);
}

function getClass_283(){
  return Ljava_util_Collections$UnmodifiableSet_2_classLit;
}

function hashCode_13(){
  return this.coll.hashCode$();
}

function Collections$UnmodifiableSet(){
}

_ = Collections$UnmodifiableSet.prototype = new Collections$UnmodifiableCollection;
_.equals$ = equals_11;
_.getClass$ = getClass_283;
_.hashCode$ = hashCode_13;
_.typeId$ = 195;
function $Collections$UnmodifiableMap$UnmodifiableEntrySet(this$static, s){
  this$static.coll = s;
  return this$static;
}

function contains_4(o){
  return this.coll.contains_0(o);
}

function getClass_284(){
  return Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit;
}

function iterator_12(){
  var it;
  it = this.coll.iterator_0();
  return $Collections$UnmodifiableMap$UnmodifiableEntrySet$1(new Collections$UnmodifiableMap$UnmodifiableEntrySet$1, it);
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet(){
}

_ = Collections$UnmodifiableMap$UnmodifiableEntrySet.prototype = new Collections$UnmodifiableSet;
_.contains_0 = contains_4;
_.getClass$ = getClass_284;
_.iterator_0 = iterator_12;
_.typeId$ = 196;
function $Collections$UnmodifiableMap$UnmodifiableEntrySet$1(this$static, val$it){
  this$static.val$it = val$it;
  return this$static;
}

function getClass_285(){
  return Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit;
}

function hasNext_7(){
  return this.val$it.hasNext();
}

function next_8(){
  return $Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry, dynamicCast(this.val$it.next_0(), 53));
}

function remove_20(){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(){
}

_ = Collections$UnmodifiableMap$UnmodifiableEntrySet$1.prototype = new Object_0;
_.getClass$ = getClass_285;
_.hasNext = hasNext_7;
_.next_0 = next_8;
_.remove_0 = remove_20;
_.typeId$ = 0;
_.val$it = null;
function $Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this$static, entry){
  this$static.entry = entry;
  return this$static;
}

function equals_12(o){
  return this.entry.equals$(o);
}

function getClass_286(){
  return Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit;
}

function getKey_1(){
  return this.entry.getKey();
}

function getValue_1(){
  return this.entry.getValue();
}

function hashCode_14(){
  return this.entry.hashCode$();
}

function setValue_1(value){
  throw $UnsupportedOperationException(new UnsupportedOperationException);
}

function toString_27(){
  return toString__devirtual$(this.entry);
}

function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(){
}

_ = Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry.prototype = new Object_0;
_.equals$ = equals_12;
_.getClass$ = getClass_286;
_.getKey = getKey_1;
_.getValue = getValue_1;
_.hashCode$ = hashCode_14;
_.setValue = setValue_1;
_.toString$ = toString_27;
_.typeId$ = 197;
_.entry = null;
function $Collections$UnmodifiableRandomAccessList(this$static, list){
  this$static.coll = list;
  this$static.list = list;
  return this$static;
}

function getClass_287(){
  return Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit;
}

function Collections$UnmodifiableRandomAccessList(){
}

_ = Collections$UnmodifiableRandomAccessList.prototype = new Collections$UnmodifiableList;
_.getClass$ = getClass_287;
_.typeId$ = 198;
function $clinit_475(){
  $clinit_475 = nullMethod;
  DAYS = initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

function $Date(this$static){
  $clinit_475();
  this$static.jsdate = new Date;
  return this$static;
}

function $getTime0(this$static){
  this$static.checkJsDate();
  return this$static.jsdate.getTime();
}

function checkJsDate(){
  (!this.jsdate || typeof this.jsdate != 'object') && throwJsDateException('' + this.jsdate);
}

function equals_13(obj){
  return obj != null && canCast(obj.typeId$, 83) && eq(fromDouble((this.checkJsDate() , this.jsdate.getTime())), fromDouble($getTime0(dynamicCast(obj, 83))));
}

function getClass_288(){
  return Ljava_util_Date_2_classLit;
}

function hashCode_15(){
  return lowBits_0(xor(fromDouble((this.checkJsDate() , this.jsdate.getTime())), shru(fromDouble((this.checkJsDate() , this.jsdate.getTime())), 32)));
}

function padTwo_0(number){
  if (number < 10) {
    return '0' + number;
  }
   else {
    return '' + number;
  }
}

function throwJsDateException(val){
  throw $IllegalStateException_0(new IllegalStateException, 'jsdate is ' + val);
}

function toString_28(){
  this.checkJsDate();
  var d = this.jsdate;
  var padTwo = padTwo_0;
  var day = DAYS[d.getDay()];
  var month = MONTHS[d.getMonth()];
  var offset = -d.getTimezoneOffset();
  var hourOffset = String(offset >= 0?'+' + Math.floor(offset / 60):Math.ceil(offset / 60));
  var minuteOffset = padTwo(Math.abs(offset) % 60);
  return day + ' ' + month + ' ' + padTwo(d.getDate()) + ' ' + padTwo(d.getHours()) + ':' + padTwo(d.getMinutes()) + ':' + padTwo(d.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + d.getFullYear();
}

function Date_0(){
}

_ = Date_0.prototype = new Object_0;
_.checkJsDate = checkJsDate;
_.equals$ = equals_13;
_.getClass$ = getClass_288;
_.hashCode$ = hashCode_15;
_.toString$ = toString_28;
_.typeId$ = 199;
_.jsdate = null;
var DAYS, MONTHS;
function getClass_289(){
  return Ljava_util_EnumSet_2_classLit;
}

function of(first, rest){
  var all, e, e$array, e$index, e$max, ordinal, set, size, superclass, a, result;
  all = dynamicCast($getEnumConstants((superclass = Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit.enumSuperclass , superclass == Ljava_lang_Enum_2_classLit?Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit:superclass)), 84);
  set = dynamicCast((a = all , result = createFromSeed(0, all.length) , initValues(a.arrayClass$, a.typeId$, a.queryId$, result) , result), 84);
  setCheck(set, first.ordinal, first);
  size = 1;
  for (e$array = rest , e$index = 0 , e$max = e$array.length; e$index < e$max; ++e$index) {
    e = e$array[e$index];
    ordinal = e.ordinal;
    if (!set[ordinal]) {
      setCheck(set, ordinal, e);
      ++size;
    }
  }
  return $EnumSet$EnumSetImpl(new EnumSet$EnumSetImpl, all, set, size);
}

function EnumSet(){
}

_ = EnumSet.prototype = new AbstractSet;
_.getClass$ = getClass_289;
_.typeId$ = 200;
function $EnumSet$EnumSetImpl(this$static, all, set, size){
  this$static.all = all;
  this$static.set = set;
  this$static.size = size;
  return this$static;
}

function $add_15(this$static, e){
  var ordinal;
  if (!e) {
    throw $NullPointerException(new NullPointerException);
  }
  ordinal = e.ordinal;
  if (!this$static.set[ordinal]) {
    setCheck(this$static.set, ordinal, e);
    ++this$static.size;
    return true;
  }
  return false;
}

function add_17(p0){
  return $add_15(this, dynamicCast(p0, 41));
}

function contains_5(o){
  var e;
  if (o != null && canCast(o.typeId$, 41)) {
    e = dynamicCast(o, 41);
    return this.set[e.ordinal] == e;
  }
  return false;
}

function getClass_290(){
  return Ljava_util_EnumSet$EnumSetImpl_2_classLit;
}

function iterator_13(){
  return $EnumSet$EnumSetImpl$IteratorImpl(new EnumSet$EnumSetImpl$IteratorImpl, this);
}

function size_7(){
  return this.size;
}

function EnumSet$EnumSetImpl(){
}

_ = EnumSet$EnumSetImpl.prototype = new EnumSet;
_.add_0 = add_17;
_.contains_0 = contains_5;
_.getClass$ = getClass_290;
_.iterator_0 = iterator_13;
_.size_0 = size_7;
_.typeId$ = 201;
_.all = null;
_.set = null;
_.size = 0;
function $EnumSet$EnumSetImpl$IteratorImpl(this$static, this$1){
  this$static.this$1 = this$1;
  $findNext_0(this$static);
  return this$static;
}

function $findNext_0(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$1.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$1.set[this$static.i]) {
      return;
    }
  }
}

function $next_7(this$static){
  if (this$static.i >= this$static.this$1.all.length) {
    throw $NoSuchElementException(new NoSuchElementException);
  }
  this$static.last = this$static.i;
  $findNext_0(this$static);
  return this$static.this$1.set[this$static.last];
}

function getClass_291(){
  return Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit;
}

function hasNext_8(){
  return this.i < this.this$1.all.length;
}

function next_9(){
  return $next_7(this);
}

function remove_21(){
  if (this.last < 0) {
    throw $IllegalStateException(new IllegalStateException);
  }
  setCheck(this.this$1.set, this.last, null);
  --this.this$1.size;
  this.last = -1;
}

function EnumSet$EnumSetImpl$IteratorImpl(){
}

_ = EnumSet$EnumSetImpl$IteratorImpl.prototype = new Object_0;
_.getClass$ = getClass_291;
_.hasNext = hasNext_8;
_.next_0 = next_9;
_.remove_0 = remove_21;
_.typeId$ = 0;
_.i = -1;
_.last = -1;
_.this$1 = null;
function $HashMap(this$static){
  $clearImpl(this$static);
  return this$static;
}

function $equals_2(value1, value2){
  return (value1 == null?null:value1) === (value2 == null?null:value2) || value1 != null && equals__devirtual$(value1, value2);
}

function getClass_292(){
  return Ljava_util_HashMap_2_classLit;
}

function HashMap(){
}

_ = HashMap.prototype = new AbstractHashMap;
_.getClass$ = getClass_292;
_.typeId$ = 202;
function $HashSet(this$static){
  this$static.map = $HashMap(new HashMap);
  return this$static;
}

function $add_16(this$static, o){
  var old;
  old = $put_0(this$static.map, o, this$static);
  return old == null;
}

function add_18(o){
  var old;
  return old = $put_0(this.map, o, this) , old == null;
}

function contains_6(o){
  return $containsKey(this.map, o);
}

function getClass_293(){
  return Ljava_util_HashSet_2_classLit;
}

function iterator_14(){
  var outerIter;
  return outerIter = $AbstractHashMap$EntrySetIterator(new AbstractHashMap$EntrySetIterator, $keySet(this.map).val$entrySet.this$0) , $AbstractMap$1$1(new AbstractMap$1$1, outerIter);
}

function size_8(){
  return this.map.size;
}

function toString_29(){
  return $toString_7($keySet(this.map));
}

function HashSet(){
}

_ = HashSet.prototype = new AbstractSet;
_.add_0 = add_18;
_.contains_0 = contains_6;
_.getClass$ = getClass_293;
_.iterator_0 = iterator_14;
_.size_0 = size_8;
_.toString$ = toString_29;
_.typeId$ = 203;
_.map = null;
function $MapEntryImpl(this$static, key, value){
  this$static.key = key;
  this$static.value_0 = value;
  return this$static;
}

function getClass_294(){
  return Ljava_util_MapEntryImpl_2_classLit;
}

function getKey_2(){
  return this.key;
}

function getValue_2(){
  return this.value_0;
}

function setValue_2(value){
  var old;
  old = this.value_0;
  this.value_0 = value;
  return old;
}

function MapEntryImpl(){
}

_ = MapEntryImpl.prototype = new AbstractMapEntry;
_.getClass$ = getClass_294;
_.getKey = getKey_2;
_.getValue = getValue_2;
_.setValue = setValue_2;
_.typeId$ = 204;
_.key = null;
_.value_0 = null;
function $NoSuchElementException(this$static){
  $fillInStackTrace();
  return this$static;
}

function getClass_295(){
  return Ljava_util_NoSuchElementException_2_classLit;
}

function NoSuchElementException(){
}

_ = NoSuchElementException.prototype = new RuntimeException;
_.getClass$ = getClass_295;
_.typeId$ = 205;
function equalsWithNullCheck(a, b){
  return (a == null?null:a) === (b == null?null:b) || a != null && equals__devirtual$(a, b);
}

function $Vector(this$static){
  this$static.arrayList = $ArrayList(new ArrayList);
  return this$static;
}

function add_19(o){
  return $add_13(this.arrayList, o);
}

function add_20(index, o){
  $add_14(this.arrayList, index, o);
}

function contains_7(elem){
  return $indexOf_2(this.arrayList, elem, 0) != -1;
}

function get_7(index){
  return $get_3(this.arrayList, index);
}

function getClass_296(){
  return Ljava_util_Vector_2_classLit;
}

function iterator_15(){
  return $AbstractList$IteratorImpl(new AbstractList$IteratorImpl, this.arrayList);
}

function remove_22(index){
  return $remove_14(this.arrayList, index);
}

function size_9(){
  return this.arrayList.size;
}

function toString_30(){
  return $toString_7(this.arrayList);
}

function Vector(){
}

_ = Vector.prototype = new AbstractList;
_.add_0 = add_19;
_.add_1 = add_20;
_.contains_0 = contains_7;
_.get_0 = get_7;
_.getClass$ = getClass_296;
_.iterator_0 = iterator_15;
_.remove_1 = remove_22;
_.size_0 = size_9;
_.toString$ = toString_30;
_.typeId$ = 206;
_.arrayList = null;
function $ChismesUploadProgress(this$static, asDialog){
  $BaseUploadStatus(this$static);
  this$static.alert_0 = $GWTCAlert(new GWTCAlert);
  this$static.asDialog = asDialog;
  this$static.prg = $GWTCProgress(new GWTCProgress, asDialog?60:20, asDialog?15:6);
  $setProgressWidget(this$static, this$static.prg);
  this$static.prg.getElement_0().style.display = '';
  $setPercentMessage_0(this$static, '{0}% {1}/{2} KB. ({3} KB/s)');
  return this$static;
}

function $setHoursMessage_0(this$static, message){
  message != null && (this$static.prg.hoursMessage = message , undefined);
}

function $setMinutesMessage_0(this$static, message){
  message != null && (this$static.prg.minutesMessage = message , undefined);
}

function $setPercentMessage_0(this$static, message){
  if (message != null) {
    this$static.prg.percentMessage = message;
    this$static.prg.totalMessage = message;
  }
}

function $setSecondsMessage_0(this$static, message){
  message != null && (this$static.prg.secondsMessage = message , undefined);
}

function getClass_297(){
  return Ljsupload_client_ChismesUploadProgress_2_classLit;
}

function getWidget_5(){
  return this.asDialog?this.prg:this.panel;
}

function newInstance_2(){
  return $ChismesUploadProgress(new ChismesUploadProgress, this.asDialog);
}

function setError_0(error){
  $setStatus(this, ($clinit_375() , ERROR));
  error != null && error.length > 0 && $alert(this.alert_0, error);
}

function setFileName_0(name_0){
  !this.asDialog && (($clinit_56() , this.fileNameLabel.element_0).innerText = name_0 || '' , undefined);
  ($clinit_56() , this.prg.textLabel.element_0).innerText = name_0 || '';
}

function setProgress_1(a, b){
  $setProgress(this.prg, a, b);
}

function setVisible_5(v){
  this.asDialog?v?$show_2(this.prg):$hide_4(this.prg):$setVisible(this.panel, v);
}

function ChismesUploadProgress(){
}

_ = ChismesUploadProgress.prototype = new BaseUploadStatus;
_.getClass$ = getClass_297;
_.getWidget = getWidget_5;
_.newInstance = newInstance_2;
_.setError = setError_0;
_.setFileName = setFileName_0;
_.setProgress = setProgress_1;
_.setVisible = setVisible_5;
_.typeId$ = 0;
_.asDialog = false;
_.prg = null;
function $I18nConstants(this$static, prop_0, regional){
  var key, key$array, key$index, key$max, reg;
  this$static.strs = $HashMap(new HashMap);
  if (definedImpl(prop_0.p_0, regional)) {
    reg = $JsProperties(new JsProperties, getJSObjectImpl(prop_0.p_0, regional));
    for (key$array = $keys(reg) , key$index = 0 , key$max = key$array.length; key$index < key$max; ++key$index) {
      key = key$array[key$index];
      $put_0(this$static.strs, key, getImpl(reg.p_0, key, ''));
    }
  }
  return this$static;
}

function $or(values){
  var val, val$array, val$index, val$max;
  for (val$array = values , val$index = 0 , val$max = val$array.length; val$index < val$max; ++val$index) {
    val = val$array[val$index];
    if (val != null) {
      return val;
    }
  }
  return null;
}

function getClass_298(){
  return Ljsupload_client_I18nConstants_2_classLit;
}

function uploadStatusCanceled_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusCanceled'), 1), 'Canceled']));
}

function uploadStatusCanceling_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusCanceling'), 1), 'Canceling ...']));
}

function uploadStatusDeleted_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusDeleted'), 1), 'Deleted']));
}

function uploadStatusError_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusError'), 1), 'Error']));
}

function uploadStatusInProgress_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusInProgress'), 1), 'In progress']));
}

function uploadStatusQueued_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusQueued'), 1), 'Queued']));
}

function uploadStatusSubmitting_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusSubmitting'), 1), 'Submitting form ...']));
}

function uploadStatusSuccess_1(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadStatusSuccess'), 1), 'Done']));
}

function uploaderActiveUpload_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderActiveUpload'), 1), 'There is already an active upload, try later.']));
}

function uploaderAlreadyDone_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderAlreadyDone'), 1), 'This file was already uploaded.']));
}

function uploaderBlobstoreError_0(){
  return 'It seems the application is configured to use GAE blobstore.\nThe server has raised an error while creating an Upload-Url\nBe sure thar you have enabled billing for this application in order to use blobstore.';
}

function uploaderBrowse_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploadBrowse'), 1), 'Choose a file to upload ...']));
}

function uploaderInvalidExtension_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderInvalidExtension'), 1), 'Invalid file.\nOnly these types are allowed:\n']));
}

function uploaderSend_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderSend'), 1), 'Send']));
}

function uploaderServerError_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderServerError'), 1), 'Invalid server response. Have you configured correctly your application in the server side?']));
}

function uploaderServerUnavailable_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderServerUnavailable'), 1), 'Unable to contact with the server: ']));
}

function uploaderTimeout_0(){
  return $or(initValues(_3Ljava_lang_String_2_classLit, 240, 1, [dynamicCast($get_2(this.strs, 'uploaderTimeout'), 1), 'Timeout sending the file:\n perhaps your browser does not send files correctly,\n your session has expired,\n or there was a server error.\nPlease try again.']));
}

function I18nConstants(){
}

_ = I18nConstants.prototype = new Object_0;
_.getClass$ = getClass_298;
_.uploadStatusCanceled = uploadStatusCanceled_1;
_.uploadStatusCanceling = uploadStatusCanceling_1;
_.uploadStatusDeleted = uploadStatusDeleted_1;
_.uploadStatusError = uploadStatusError_1;
_.uploadStatusInProgress = uploadStatusInProgress_1;
_.uploadStatusQueued = uploadStatusQueued_1;
_.uploadStatusSubmitting = uploadStatusSubmitting_1;
_.uploadStatusSuccess = uploadStatusSuccess_1;
_.uploaderActiveUpload = uploaderActiveUpload_0;
_.uploaderAlreadyDone = uploaderAlreadyDone_0;
_.uploaderBlobstoreError = uploaderBlobstoreError_0;
_.uploaderBrowse = uploaderBrowse_0;
_.uploaderInvalidExtension = uploaderInvalidExtension_0;
_.uploaderSend = uploaderSend_0;
_.uploaderServerError = uploaderServerError_0;
_.uploaderServerUnavailable = uploaderServerUnavailable_0;
_.uploaderTimeout = uploaderTimeout_0;
_.typeId$ = 0;
function $IncubatorUploadProgress(this$static){
  $BaseUploadStatus(this$static);
  this$static.formater = $IncubatorUploadProgress$1(new IncubatorUploadProgress$1, this$static);
  this$static.prg = $ProgressBar(new ProgressBar);
  $setProgressWidget(this$static, this$static.prg);
  this$static.prg.textFormatter = this$static.formater;
  return this$static;
}

function getClass_299(){
  return Ljsupload_client_IncubatorUploadProgress_2_classLit;
}

function newInstance_3(){
  return $IncubatorUploadProgress(new IncubatorUploadProgress);
}

function setPercent_0(percent){
  $setStatus(this, this.status_0);
  $setProgress_1(this.prg, percent);
}

function IncubatorUploadProgress(){
}

_ = IncubatorUploadProgress.prototype = new BaseUploadStatus;
_.getClass$ = getClass_299;
_.newInstance = newInstance_3;
_.setPercent = setPercent_0;
_.typeId$ = 0;
function $IncubatorUploadProgress$1(this$static, this$0){
  this$static.this$0 = this$0;
  return this$static;
}

function getClass_300(){
  return Ljsupload_client_IncubatorUploadProgress$1_2_classLit;
}

function IncubatorUploadProgress$1(){
}

_ = IncubatorUploadProgress$1.prototype = new ProgressBar$TextFormatter;
_.getClass$ = getClass_300;
_.typeId$ = 0;
_.this$0 = null;
function $JsProperties(this$static, p_0){
  this$static.p_0 = p_0;
  return this$static;
}

function $getInt(this$static, name_0, deFault){
  var val;
  val = definedImpl(this$static.p_0, name_0)?$replaceAll(getImpl(this$static.p_0, name_0, ''), '[^\\d]', ''):'';
  if (val.length == 0) {
    return deFault;
  }
  return valueOf(__parseAndValidateInt(val, 10, -2147483648, 2147483647)).value_0;
}

function $keys(this$static){
  var a, i, ret;
  a = keysImpl(this$static.p_0);
  ret = initDim(_3Ljava_lang_String_2_classLit, 240, 1, a.length, 0);
  for (i = 0; i < a.length; ++i) {
    ret[i] = '' + a[i];
  }
  return ret;
}

function definedImpl(p_0, name_0){
  return p_0 && p_0[name_0]?true:false;
}

function getBoolean(jso, name_0, deFault){
  var val;
  val = (jso && jso[name_0]?'' + jso[name_0]:jso && jso[name_0] === false?'false':'' + deFault).toLowerCase();
  if ($equals_1('true', val)) {
    return true;
  }
  if ($equals_1('false', val)) {
    return false;
  }
  if ($equals_1('on', val)) {
    return true;
  }
  if ($equals_1('off', val)) {
    return false;
  }
  if ($equals_1('1', val)) {
    return true;
  }
  if ($equals_1('0', val)) {
    return false;
  }
  return deFault;
}

function getClass_301(){
  return Ljsupload_client_JsProperties_2_classLit;
}

function getImpl(p_0, name_0, defa){
  return p_0 && p_0[name_0]?'' + p_0[name_0]:p_0 && p_0[name_0] === false?'false':defa;
}

function getJSObjectImpl(p_0, name_0){
  return p_0 && p_0[name_0]?p_0[name_0]:null;
}

function keysImpl(p_0){
  var key, keys = [];
  if (p_0)
    for (key in p_0)
      keys.push('' + key);
  return keys;
}

function toString_31(){
  var k, k$array, k$index, k$max, ret;
  ret = '';
  if (!this.p_0) {
    ret = 'null';
  }
   else {
    for (k$array = $keys(this) , k$index = 0 , k$max = k$array.length; k$index < k$max; ++k$index) {
      k = k$array[k$index];
      ret += k + ':' + getImpl(this.p_0, k, '') + ',';
    }
  }
  return ret;
}

function JsProperties(){
}

_ = JsProperties.prototype = new Object_0;
_.getClass$ = getClass_301;
_.toString$ = toString_31;
_.typeId$ = 0;
_.p_0 = null;
function $JsProperties$JSChangeClosureImpl(this$static, o){
  this$static.jsobject = o;
  return this$static;
}

function $onChangeImpl(f, o){
  f && typeof f == 'function' && f(o);
}

function getClass_302(){
  return Ljsupload_client_JsProperties$JSChangeClosureImpl_2_classLit;
}

function JsProperties$JSChangeClosureImpl(){
}

_ = JsProperties$JSChangeClosureImpl.prototype = new Object_0;
_.getClass$ = getClass_302;
_.typeId$ = 0;
_.jsobject = null;
function $onLoadImpl(){
  try {
    $wnd.jsuOnLoad && $wnd.jsuOnLoad();
  }
   catch (e) {
    alert('Error executing jsuOnLoad method: ' + e);
  }
}

function $clinit_500(){
  $clinit_500 = nullMethod;
  $clinit_34();
}

function getClass_303(){
  return Ljsupload_client_JsUpload$1_2_classLit;
}

function run_8(){
  $onLoadImpl();
}

function JsUpload$1(){
}

_ = JsUpload$1.prototype = new Timer;
_.getClass$ = getClass_303;
_.run = run_8;
_.typeId$ = 207;
function $JsUtils$3(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function $onCancel_0(this$static, u){
  $onChangeImpl(this$static.val$jsChange.jsobject, {url:$composeURL(u, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + u.fileInput.getName()])), name:u.fileInput.getName(), filename:u.fileInput.getFilename(), basename:$replaceAll(u.fileInput.getFilename(), '^.*[/\\\\]', ''), response:u.serverResponse, status:u.statusWidget.getStatus().name_0});
}

function getClass_304(){
  return Ljsupload_client_JsUtils$3_2_classLit;
}

function JsUtils$3(){
}

_ = JsUtils$3.prototype = new Object_0;
_.getClass$ = getClass_304;
_.typeId$ = 208;
_.val$jsChange = null;
function $JsUtils$4(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function getClass_305(){
  return Ljsupload_client_JsUtils$4_2_classLit;
}

function JsUtils$4(){
}

_ = JsUtils$4.prototype = new Object_0;
_.getClass$ = getClass_305;
_.typeId$ = 209;
_.val$jsChange = null;
function $JsUtils$5(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function getClass_306(){
  return Ljsupload_client_JsUtils$5_2_classLit;
}

function JsUtils$5(){
}

_ = JsUtils$5.prototype = new Object_0;
_.getClass$ = getClass_306;
_.typeId$ = 210;
_.val$jsChange = null;
function $JsUtils$6(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function $onLoad_1(this$static, image){
  $onChangeImpl(this$static.val$jsChange.jsobject, $getDataImpl_0(image.state.getUrl(image), image.realHeight_0, image.realWidth_0));
}

function getClass_307(){
  return Ljsupload_client_JsUtils$6_2_classLit;
}

function JsUtils$6(){
}

_ = JsUtils$6.prototype = new Object_0;
_.getClass$ = getClass_307;
_.typeId$ = 211;
_.val$jsChange = null;
function $JsUtils$7(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function $onStart_0(this$static, u){
  $onChangeImpl(this$static.val$jsChange.jsobject, {url:$composeURL(u, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + u.fileInput.getName()])), name:u.fileInput.getName(), filename:u.fileInput.getFilename(), basename:$replaceAll(u.fileInput.getFilename(), '^.*[/\\\\]', ''), response:u.serverResponse, status:u.statusWidget.getStatus().name_0});
}

function getClass_308(){
  return Ljsupload_client_JsUtils$7_2_classLit;
}

function JsUtils$7(){
}

_ = JsUtils$7.prototype = new Object_0;
_.getClass$ = getClass_308;
_.typeId$ = 212;
_.val$jsChange = null;
function $JsUtils$8(this$static, val$jsChange){
  this$static.val$jsChange = val$jsChange;
  return this$static;
}

function getClass_309(){
  return Ljsupload_client_JsUtils$8_2_classLit;
}

function onStatusChanged_0(u){
  $onChangeImpl(this.val$jsChange.jsobject, {url:$composeURL(u, initValues(_3Ljava_lang_String_2_classLit, 240, 1, ['show=' + u.fileInput.getName()])), name:u.fileInput.getName(), filename:u.fileInput.getFilename(), basename:$replaceAll(u.fileInput.getFilename(), '^.*[/\\\\]', ''), response:u.serverResponse, status:u.statusWidget.getStatus().name_0});
}

function JsUtils$8(){
}

_ = JsUtils$8.prototype = new Object_0;
_.getClass$ = getClass_309;
_.onStatusChanged = onStatusChanged_0;
_.typeId$ = 213;
_.val$jsChange = null;
function $clinit_507(){
  $clinit_507 = nullMethod;
  $clinit_395();
}

function $PreloadImage(this$static, prop_0){
  $clinit_507();
  this$static.state = $Image$UnclippedState(new Image$UnclippedState, this$static);
  this$static.element_0['className'] = 'gwt-Image';
  this$static.imgErrorListener = $PreloadedImage$1(new PreloadedImage$1, this$static);
  this$static.imgLoadListener = $PreloadedImage$2(new PreloadedImage$2, this$static);
  this$static.thisInstance = this$static;
  this$static.loadHandler = $addHandler(this$static, this$static.imgLoadListener, ($clinit_124() , $clinit_124() , TYPE_5));
  this$static.errHandler = $addHandler(this$static, this$static.imgErrorListener, ($clinit_98() , $clinit_98() , TYPE_2));
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  $setUrl_0(this$static, getImpl(this$static.jsProp.p_0, 'url', ''));
  this$static.containerId = getImpl(this$static.jsProp.p_0, 'containerId', '');
  this$static.onLoad = $JsUtils$6(new JsUtils$6, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onLoad')));
  return this$static;
}

function $getDataImpl_0(url, height, width){
  return {url:url, realwidth:width, realheight:height};
}

function addStyleName_1(style){
  setStyleName(this.element_0, style, true);
}

function getClass_310(){
  return Ljsupload_client_PreloadImage_2_classLit;
}

function getData_3(){
  return $getDataImpl_0(this.state.getUrl(this), this.realHeight_0, this.realWidth_0);
}

function getElement_1(){
  return this.element_0;
}

function realHeight(){
  return this.realHeight_0;
}

function realWidth(){
  return this.realWidth_0;
}

function setAlt(alt){
  this.element_0.setAttribute('alt', alt);
}

function setSize(width, height){
  width > 0 && (this.element_0.style['width'] = width + 'px' , undefined);
  height > 0 && (this.element_0.style['height'] = height + 'px' , undefined);
}

function PreloadImage(){
}

_ = PreloadImage.prototype = new PreloadedImage;
_.addStyleName_0 = addStyleName_1;
_.getClass$ = getClass_310;
_.getData_0 = getData_3;
_.getElement_0 = getElement_1;
_.realHeight_1 = realHeight;
_.realWidth_1 = realWidth;
_.setAlt_0 = setAlt;
_.setSize_0 = setSize;
_.typeId$ = 214;
_.jsProp = null;
function $export0(){
  !$wnd.jsu && ($wnd.jsu = {});
  if ($wnd.jsu.PreloadImage) {
    var pkg = $wnd.jsu.PreloadImage;
  }
  $wnd.jsu.PreloadImage = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jsupload.client.PreloadImage') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $PreloadImage(new PreloadImage, arguments[0]);
      $clinit_514();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsu.PreloadImage.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsu.PreloadImage[p] = pkg[p];
    }
  }
  __0.addStyleName = function(arg0){
    this.instance.addStyleName_0(arg0);
  }
  ;
  __0.getData = function(){
    var x = this.instance.getData_0();
    return x;
  }
  ;
  __0.getElement = function(){
    var x = this.instance.getElement_0();
    return x;
  }
  ;
  __0.realHeight = function(){
    var x = this.instance.realHeight_1();
    return x;
  }
  ;
  __0.realWidth = function(){
    var x = this.instance.realWidth_1();
    return x;
  }
  ;
  __0.setAlt = function(arg0){
    this.instance.setAlt_0(arg0);
  }
  ;
  __0.setSize = function(arg0, arg1){
    this.instance.setSize_0(arg0, arg1);
  }
  ;
  $clinit_514();
  $put_0(impl_2.typeMap, 'jsupload.client.PreloadImage', $wnd.jsu.PreloadImage);
}

function $Upload(this$static, prop_0){
  var choose, extensions, multiple, status_0, type;
  this$static.jsProp = $JsProperties(new JsProperties, prop_0);
  multiple = getBoolean(this$static.jsProp.p_0, 'multiple', false);
  status_0 = null;
  type = ($clinit_365() , BROWSER_INPUT);
  choose = getImpl(this$static.jsProp.p_0, 'chooser', '');
  $equals_1('button', choose)?(type = BUTTON):$equals_1('label', choose)?(type = LABEL):$equals_1('anchor', choose) && (type = ANCHOR);
  if ($equals_1('incubator', getImpl(this$static.jsProp.p_0, 'type', ''))) {
    multiple?(this$static.uploader = $MultiUploader_0(new MultiUploader, type, $IncubatorUploadProgress(new IncubatorUploadProgress))):(this$static.uploader = $SingleUploader(new SingleUploader, type));
  }
   else if ($equals_1('basic', getImpl(this$static.jsProp.p_0, 'type', ''))) {
    multiple?(this$static.uploader = $MultiUploader(new MultiUploader, type)):(this$static.uploader = $SingleUploader(new SingleUploader, type));
  }
   else {
    status_0 = $ChismesUploadProgress(new ChismesUploadProgress, !multiple);
    this$static.uploader = multiple?$MultiUploader_0(new MultiUploader, type, status_0):$SingleUploader_0(new SingleUploader, type, status_0);
  }
  multiple && (dynamicCast(this$static.uploader, 85).maximumFiles = $getInt(this$static.jsProp, 'maxFiles', 0) , undefined);
  this$static.uploader.addOnStartUploadHandler($JsUtils$7(new JsUtils$7, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onStart'))));
  this$static.uploader.addOnChangeUploadHandler($JsUtils$4(new JsUtils$4, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onChange'))));
  this$static.uploader.addOnFinishUploadHandler($JsUtils$5(new JsUtils$5, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onFinish'))));
  this$static.uploader.addOnCancelUploadHandler($JsUtils$3(new JsUtils$3, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onCancel'))));
  this$static.uploader.addOnStatusChangedHandler($JsUtils$8(new JsUtils$8, $JsProperties$JSChangeClosureImpl(new JsProperties$JSChangeClosureImpl, getJSObjectImpl(this$static.jsProp.p_0, 'onStatus'))));
  this$static.panel = get_0(getImpl(this$static.jsProp.p_0, 'containerId', 'NoId'));
  !this$static.panel && (this$static.panel = ($clinit_288() , get_0(null)));
  $add_4(this$static.panel, dynamicCast(this$static.uploader, 33));
  definedImpl(this$static.jsProp.p_0, 'action') && this$static.uploader.setServletPath(getImpl(this$static.jsProp.p_0, 'action', ''));
  if (definedImpl(this$static.jsProp.p_0, 'validExtensions')) {
    extensions = $split(getImpl(this$static.jsProp.p_0, 'validExtensions', ''), '[, ;:]+', 0);
    this$static.uploader.setValidExtensions(extensions);
  }
  this$static.uploader.setI18Constants_0($I18nConstants(new I18nConstants, this$static.jsProp, 'regional'));
  if (status_0) {
    definedImpl(this$static.jsProp.p_0, 'progressPercentMsg') && $setPercentMessage_0(status_0, getImpl(this$static.jsProp.p_0, 'progressPercentMsg', ''));
    definedImpl(this$static.jsProp.p_0, 'progressHoursMsg') && $setHoursMessage_0(status_0, getImpl(this$static.jsProp.p_0, 'progressHoursMsg', ''));
    definedImpl(this$static.jsProp.p_0, 'progressMinutesMsg') && $setMinutesMessage_0(status_0, getImpl(this$static.jsProp.p_0, 'progressMinutesMsg', ''));
    definedImpl(this$static.jsProp.p_0, 'progressSecondsMsg') && $setSecondsMessage_0(status_0, getImpl(this$static.jsProp.p_0, 'progressSecondsMsg', ''));
  }
  return this$static;
}

function addElement(e){
  var wraper;
  wraper = $HTML(new HTML);
  wraper.element_0.appendChild(e);
  this.uploader.add(wraper);
}

function data_0(){
  return this.uploader.getData_0();
}

function fileUrl_1(){
  return this.uploader.fileUrl_0();
}

function getClass_311(){
  return Ljsupload_client_Upload_2_classLit;
}

function submit_1(){
  this.uploader.submit_0();
}

function Upload(){
}

_ = Upload.prototype = new Object_0;
_.addElement_0 = addElement;
_.data_1 = data_0;
_.fileUrl_0 = fileUrl_1;
_.getClass$ = getClass_311;
_.submit_0 = submit_1;
_.typeId$ = 0;
_.jsProp = null;
_.panel = null;
_.uploader = null;
function $export0_0(){
  !$wnd.jsu && ($wnd.jsu = {});
  if ($wnd.jsu.Upload) {
    var pkg = $wnd.jsu.Upload;
  }
  $wnd.jsu.Upload = function(){
    if (arguments.length == 1 && arguments[0] != null && getTypeName(arguments[0]) == 'jsupload.client.Upload') {
      this.instance = arguments[0];
    }
     else if (arguments.length == 1) {
      this.instance = $Upload(new Upload, arguments[0]);
      $clinit_514();
      this.instance['__gwtex_wrap'] = this;
    }
  }
  ;
  var __0 = $wnd.jsu.Upload.prototype = new Object;
  if (pkg) {
    for (p in pkg) {
      $wnd.jsu.Upload[p] = pkg[p];
    }
  }
  __0.addElement = function(arg0){
    this.instance.addElement_0(arg0);
  }
  ;
  __0.data = function(){
    var x = this.instance.data_1();
    return x;
  }
  ;
  __0.fileUrl = function(){
    var x = this.instance.fileUrl_0();
    return x;
  }
  ;
  __0.submit = function(){
    this.instance.submit_0();
  }
  ;
  $clinit_514();
  $put_0(impl_2.typeMap, 'jsupload.client.Upload', $wnd.jsu.Upload);
}

function getClass_312(){
  return Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit;
}

function ExporterBaseImpl(){
}

_ = ExporterBaseImpl.prototype = new Object_0;
_.getClass$ = getClass_312;
_.typeId$ = 0;
function $ExporterBaseActual(this$static){
  this$static.typeMap = $HashMap(new HashMap);
  return this$static;
}

function getClass_313(){
  return Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit;
}

function ExporterBaseActual(){
}

_ = ExporterBaseActual.prototype = new ExporterBaseImpl;
_.getClass$ = getClass_313;
_.typeId$ = 0;
function $clinit_514(){
  $clinit_514 = nullMethod;
  impl_2 = $ExporterBaseActual(new ExporterBaseActual);
}

var impl_2;
var $entry = entry_0;
function gwtOnLoad(errFn, modName, modBase){
  $moduleName = modName;
  $moduleBase = modBase;
  if (errFn)
    try {
      $entry(init)();
    }
     catch (e) {
      errFn(modName);
    }
   else {
    $entry(init)();
  }
}

var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'), Lcom_google_code_p_gwtchismes_client_bundles_com_1google_1code_1p_1gwtchismes_1client_1bundles_1ButtonImages_1default_1StaticClientBundleGenerator_2_classLit = createForClass('com.google.code.p.gwtchismes.client.bundles.', 'com_google_code_p_gwtchismes_client_bundles_ButtonImages_default_StaticClientBundleGenerator'), Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'UIObject'), Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Widget'), Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Panel'), Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel'), Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox'), Lcom_google_code_p_gwtchismes_client_GWTCAlert_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert'), Lcom_google_code_p_gwtchismes_client_GWTCAlert$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCAlert$1'), Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratorPanel'), Lcom_google_code_p_gwtchismes_client_GWTCBox_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox'), Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Label'), Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTML'), Lcom_google_code_p_gwtchismes_client_GWTCBox$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCBox$2'), Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusWidget'), Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ButtonBase'), Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Button'), Lcom_google_code_p_gwtchismes_client_GWTCButton_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton'), Lcom_google_code_p_gwtchismes_client_GWTCButton$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$1'), Lcom_google_code_p_gwtchismes_client_GWTCButton$2_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$2'), Lcom_google_code_p_gwtchismes_client_GWTCButton$3_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$3'), Lcom_google_code_p_gwtchismes_client_GWTCButton$4_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$4'), Lcom_google_code_p_gwtchismes_client_GWTCButton$5_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$5'), Lcom_google_code_p_gwtchismes_client_GWTCButton$6_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$6'), Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent'), Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent'), Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ClickEvent'), Lcom_google_code_p_gwtchismes_client_GWTCButton$7_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCButton$7'), Lcom_google_gwt_user_client_ui_FocusPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FocusPanel'), Lcom_google_code_p_gwtchismes_client_GWTCGlassPanel_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCGlassPanel'), _3Ljava_lang_Object_2_classLit = createForArray('[Ljava.lang.', 'Object;'), Lcom_google_code_p_gwtchismes_client_GWTCPopupBox$1_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCPopupBox$1'), Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer'), Lcom_google_gwt_user_client_ui_Composite_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Composite'), Lcom_google_code_p_gwtchismes_client_GWTCProgress_2_classLit = createForClass('com.google.code.p.gwtchismes.client.', 'GWTCProgress'), Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation'), _3Lcom_google_gwt_animation_client_Animation_2_classLit = createForArray('[Lcom.google.gwt.animation.client.', 'Animation;'), Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client.', 'Animation$1'), Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'), Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'), Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'), Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client.', 'Scheduler'), Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl'), Lcom_google_gwt_core_client_impl_SchedulerImpl$1_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$1'), Lcom_google_gwt_core_client_impl_SchedulerImpl$2_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'SchedulerImpl$2'), Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl.', 'StackTraceCreator$Collector'), Ljava_lang_StackTraceElement_2_classLit = createForClass('java.lang.', 'StackTraceElement'), _3Ljava_lang_StackTraceElement_2_classLit = createForArray('[Ljava.lang.', 'StackTraceElement;'), Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), Lcom_google_gwt_dom_client_DOMImpl_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImpl'), Lcom_google_gwt_dom_client_DOMImplTrident_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplTrident'), Lcom_google_gwt_dom_client_DOMImplIE6_2_classLit = createForClass('com.google.gwt.dom.client.', 'DOMImplIE6'), Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'), _3Ljava_lang_String_2_classLit = createForArray('[Ljava.lang.', 'String;'), Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'), Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit', Ljava_lang_Enum_2_classLit, values_2), _3Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Unit;'), Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$1', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$2', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$3', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$4', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$5', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$6', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$7', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$8', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Unit$9', Lcom_google_gwt_dom_client_Style$Unit_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display', Ljava_lang_Enum_2_classLit, values_0), _3Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Display;'), Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$1', Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$2', Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$3', Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Display$4', Lcom_google_gwt_dom_client_Style$Display_2_classLit, null), Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position', Ljava_lang_Enum_2_classLit, values_1), _3Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForArray('[Lcom.google.gwt.dom.client.', 'Style$Position;'), Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$1', Lcom_google_gwt_dom_client_Style$Position_2_classLit, null), Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$2', Lcom_google_gwt_dom_client_Style$Position_2_classLit, null), Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$3', Lcom_google_gwt_dom_client_Style$Position_2_classLit, null), Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum('com.google.gwt.dom.client.', 'Style$Position$4', Lcom_google_gwt_dom_client_Style$Position_2_classLit, null), Lcom_google_gwt_event_dom_client_BlurEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'BlurEvent'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared.', 'GwtEvent$Type'), Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'DomEvent$Type'), Lcom_google_gwt_event_dom_client_ErrorEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ErrorEvent'), Lcom_google_gwt_event_dom_client_FocusEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'FocusEvent'), Lcom_google_gwt_event_dom_client_KeyEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyEvent'), Lcom_google_gwt_event_dom_client_KeyPressEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'KeyPressEvent'), Lcom_google_gwt_event_dom_client_LoadEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'LoadEvent'), Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseEvent'), Lcom_google_gwt_event_dom_client_MouseDownEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseDownEvent'), Lcom_google_gwt_event_dom_client_MouseMoveEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseMoveEvent'), Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOutEvent'), Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseOverEvent'), Lcom_google_gwt_event_dom_client_MouseUpEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'MouseUpEvent'), Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'PrivateMap'), Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'CloseEvent'), Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ResizeEvent'), Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared.', 'ValueChangeEvent'), Lcom_google_gwt_event_shared_DefaultHandlerRegistration_2_classLit = createForClass('com.google.gwt.event.shared.', 'DefaultHandlerRegistration'), Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager'), Lcom_google_gwt_event_shared_HandlerManager$HandlerRegistry_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$HandlerRegistry'), Lcom_google_gwt_event_shared_HandlerManager$1_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$1'), Lcom_google_gwt_event_shared_HandlerManager$2_2_classLit = createForClass('com.google.gwt.event.shared.', 'HandlerManager$2'), Lcom_google_gwt_http_client_Request_2_classLit = createForClass('com.google.gwt.http.client.', 'Request'), Lcom_google_gwt_http_client_Response_2_classLit = createForClass('com.google.gwt.http.client.', 'Response'), Lcom_google_gwt_http_client_Request$1_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$1'), Lcom_google_gwt_http_client_Request$3_2_classLit = createForClass('com.google.gwt.http.client.', 'Request$3'), Lcom_google_gwt_http_client_RequestBuilder_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder'), Lcom_google_gwt_http_client_RequestBuilder$Method_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$Method'), Lcom_google_gwt_http_client_RequestBuilder$1_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestBuilder$1'), Lcom_google_gwt_http_client_RequestException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestException'), Lcom_google_gwt_http_client_RequestPermissionException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestPermissionException'), Lcom_google_gwt_http_client_RequestTimeoutException_2_classLit = createForClass('com.google.gwt.http.client.', 'RequestTimeoutException'), _3_3D_classLit = createForArray('', '[[D'), Lcom_google_gwt_resources_client_impl_ImageResourcePrototype_2_classLit = createForClass('com.google.gwt.resources.client.impl.', 'ImageResourcePrototype'), Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl'), Lcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'ElementMapperImpl$FreeNode'), Lcom_google_gwt_user_client_impl_HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImpl'), Lcom_google_gwt_user_client_impl_HistoryImplIE6_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'HistoryImplIE6'), Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImplIE$1'), Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'WindowImplIE$2'), Lcom_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1StaticClientBundleGenerator$1_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$1'), Lcom_google_gwt_user_client_impl_com_1google_1gwt_1user_1client_1impl_1WindowImplIE_1Resources_1default_1StaticClientBundleGenerator$2_2_classLit = createForClass('com.google.gwt.user.client.impl.', 'com_google_gwt_user_client_impl_WindowImplIE_Resources_default_StaticClientBundleGenerator$2'), Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel'), Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AbsolutePanel'), Lcom_google_gwt_user_client_ui_Anchor_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Anchor'), _3Ljava_lang_Throwable_2_classLit = createForArray('[Ljava.lang.', 'Throwable;'), Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException'), Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$1'), Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'AttachDetachException$2'), Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'CellPanel'), Lcom_google_gwt_user_client_ui_DecoratedPopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedPopupPanel'), Lcom_google_gwt_user_client_ui_DialogBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox'), Lcom_google_gwt_user_client_ui_DialogBox$CaptionImpl_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$CaptionImpl'), Lcom_google_gwt_user_client_ui_DialogBox$MouseHandler_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$MouseHandler'), Lcom_google_gwt_user_client_ui_DialogBox$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DialogBox$1'), _3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Widget;'), Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$TmpRow'), _3Lcom_google_gwt_user_client_ui_DockPanel$TmpRow_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'DockPanel$TmpRow;'), Lcom_google_gwt_user_client_ui_DockPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel'), Lcom_google_gwt_user_client_ui_DockPanel$DockLayoutConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$DockLayoutConstant'), Lcom_google_gwt_user_client_ui_DockPanel$LayoutData_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DockPanel$LayoutData'), Lcom_google_gwt_user_client_ui_FileUpload_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FileUpload'), Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable'), Lcom_google_gwt_user_client_ui_FlexTable_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable'), Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$CellFormatter'), Lcom_google_gwt_user_client_ui_FlexTable$FlexCellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlexTable$FlexCellFormatter'), Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlowPanel'), Lcom_google_gwt_user_client_ui_FormPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FormPanel'), Lcom_google_gwt_user_client_ui_FormPanel$SubmitCompleteEvent_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FormPanel$SubmitCompleteEvent'), Lcom_google_gwt_user_client_ui_FormPanel$SubmitEvent_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FormPanel$SubmitEvent'), Lcom_google_gwt_user_client_ui_FormPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FormPanel$1'), Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Grid'), Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$ColumnFormatter'), Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HTMLTable$1'), Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasHorizontalAlignment$HorizontalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HasVerticalAlignment$VerticalAlignmentConstant'), Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'HorizontalPanel'), Lcom_google_gwt_user_client_ui_Image_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image'), Lcom_google_gwt_user_client_ui_Image$State_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$State'), Lcom_google_gwt_user_client_ui_Image$ClippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$ClippedState'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Ljava_util_AbstractCollection_2_classLit = createForClass('java.util.', 'AbstractCollection'), Ljava_util_AbstractList_2_classLit = createForClass('java.util.', 'AbstractList'), Ljava_util_ArrayList_2_classLit = createForClass('java.util.', 'ArrayList'), _3C_classLit = createForArray('', '[C'), Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForEnum('com.google.gwt.user.client.ui.', 'PopupPanel$AnimationType', Ljava_lang_Enum_2_classLit, values_3), _3Lcom_google_gwt_user_client_ui_PopupPanel$AnimationType_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'PopupPanel$AnimationType;'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation'), Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$ResizeAnimation$1'), Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$1'), Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$3'), Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'PopupPanel$4'), Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$DefaultRootPanel'), Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$1'), Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'RootPanel$2'), Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'SimplePanel$1'), Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection'), Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetCollection$WidgetIterator'), Lcom_google_gwt_user_client_CommandCanceledException_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandCanceledException'), Lcom_google_gwt_user_client_CommandExecutor_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor'), Lcom_google_gwt_user_client_CommandExecutor$CircularIterator_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$CircularIterator'), Lcom_google_gwt_user_client_CommandExecutor$1_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$1'), Lcom_google_gwt_user_client_CommandExecutor$2_2_classLit = createForClass('com.google.gwt.user.client.', 'CommandExecutor$2'), Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Event$NativePreviewEvent'), Lcom_google_gwt_user_client_Timer$1_2_classLit = createForClass('com.google.gwt.user.client.', 'Timer$1'), Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$ClosingEvent'), Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client.', 'Window$WindowHandlers'), Lcom_google_gwt_widgetideas_client_ProgressBar_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ProgressBar'), Lcom_google_gwt_widgetideas_client_ProgressBar$TextFormatter_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ProgressBar$TextFormatter'), Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ResizableWidgetCollection'), Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$ResizableWidgetInfo_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ResizableWidgetCollection$ResizableWidgetInfo'), Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$1_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ResizableWidgetCollection$1'), Lcom_google_gwt_widgetideas_client_ResizableWidgetCollection$2_2_classLit = createForClass('com.google.gwt.widgetideas.client.', 'ResizableWidgetCollection$2'), Lcom_google_gwt_xml_client_impl_DOMItem_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMItem'), Lcom_google_gwt_xml_client_impl_NodeImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeImpl'), Lcom_google_gwt_xml_client_impl_AttrImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'AttrImpl'), Lcom_google_gwt_xml_client_impl_CharacterDataImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CharacterDataImpl'), Lcom_google_gwt_xml_client_impl_TextImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'TextImpl'), Lcom_google_gwt_xml_client_impl_CDATASectionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CDATASectionImpl'), Lcom_google_gwt_xml_client_impl_CommentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CommentImpl'), Lcom_google_gwt_xml_client_DOMException_2_classLit = createForClass('com.google.gwt.xml.client.', 'DOMException'), Lcom_google_gwt_xml_client_impl_DOMParseException_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMParseException'), Lcom_google_gwt_xml_client_impl_DocumentFragmentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentFragmentImpl'), Lcom_google_gwt_xml_client_impl_DocumentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentImpl'), Lcom_google_gwt_xml_client_impl_ElementImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ElementImpl'), Lcom_google_gwt_xml_client_impl_NodeListImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeListImpl'), Lcom_google_gwt_xml_client_impl_ProcessingInstructionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ProcessingInstructionImpl'), Lcom_google_gwt_xml_client_impl_XMLParserImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImpl'), Lcom_google_gwt_xml_client_impl_XMLParserImplIE6_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImplIE6'), Lgwtupload_client_BaseUploadStatus_2_classLit = createForClass('gwtupload.client.', 'BaseUploadStatus'), Lgwtupload_client_BaseUploadStatus$BasicProgressBar_2_classLit = createForClass('gwtupload.client.', 'BaseUploadStatus$BasicProgressBar'), Lgwtupload_client_BaseUploadStatus$1_2_classLit = createForClass('gwtupload.client.', 'BaseUploadStatus$1'), Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$DecoratedFileUploadImpl'), Lgwtupload_client_DecoratedFileUpload_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload'), Lgwtupload_client_DecoratedFileUpload$FileUploadWithMouseEvents_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$FileUploadWithMouseEvents'), Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl$1_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$DecoratedFileUploadImpl$1'), Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImpl$2_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$DecoratedFileUploadImpl$2'), Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImplClick_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$DecoratedFileUploadImplClick'), Lgwtupload_client_DecoratedFileUpload$DecoratedFileUploadImplClick$1_2_classLit = createForClass('gwtupload.client.', 'DecoratedFileUpload$DecoratedFileUploadImplClick$1'), Lgwtupload_client_IFileInput$ButtonFileInput_2_classLit = createForClass('gwtupload.client.', 'IFileInput$ButtonFileInput'), Lgwtupload_client_IFileInput$AnchorFileInput_2_classLit = createForClass('gwtupload.client.', 'IFileInput$AnchorFileInput'), Lgwtupload_client_IFileInput$BrowserFileInput_2_classLit = createForClass('gwtupload.client.', 'IFileInput$BrowserFileInput'), Lgwtupload_client_IFileInput$FileInputType_2_classLit = createForEnum('gwtupload.client.', 'IFileInput$FileInputType', Ljava_lang_Enum_2_classLit, values_4), _3Lgwtupload_client_IFileInput$FileInputType_2_classLit = createForArray('[Lgwtupload.client.', 'IFileInput$FileInputType;'), Lgwtupload_client_IFileInput$FileInputType$1_2_classLit = createForEnum('gwtupload.client.', 'IFileInput$FileInputType$1', Lgwtupload_client_IFileInput$FileInputType_2_classLit, null), Lgwtupload_client_IFileInput$FileInputType$2_2_classLit = createForEnum('gwtupload.client.', 'IFileInput$FileInputType$2', Lgwtupload_client_IFileInput$FileInputType_2_classLit, null), Lgwtupload_client_IFileInput$FileInputType$3_2_classLit = createForEnum('gwtupload.client.', 'IFileInput$FileInputType$3', Lgwtupload_client_IFileInput$FileInputType_2_classLit, null), Lgwtupload_client_IFileInput$LabelFileInput_2_classLit = createForClass('gwtupload.client.', 'IFileInput$LabelFileInput'), Lgwtupload_client_IFileInput$FileInputType$4_2_classLit = createForEnum('gwtupload.client.', 'IFileInput$FileInputType$4', Lgwtupload_client_IFileInput$FileInputType_2_classLit, null), Lgwtupload_client_IFileInput$LabelFileInput$1_2_classLit = createForClass('gwtupload.client.', 'IFileInput$LabelFileInput$1'), Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit = createForEnum('gwtupload.client.', 'IUploadStatus$CancelBehavior', Ljava_lang_Enum_2_classLit, values_5), _3Lgwtupload_client_IUploadStatus$CancelBehavior_2_classLit = createForArray('[Lgwtupload.client.', 'IUploadStatus$CancelBehavior;'), Lgwtupload_client_IUploadStatus$Status_2_classLit = createForEnum('gwtupload.client.', 'IUploadStatus$Status', Ljava_lang_Enum_2_classLit, values_6), _3Lgwtupload_client_IUploadStatus$Status_2_classLit = createForArray('[Lgwtupload.client.', 'IUploadStatus$Status;'), Lgwtupload_client_IUploadStatus_1UploadStatusConstants_1_2_classLit = createForClass('gwtupload.client.', 'IUploadStatus_UploadStatusConstants_'), Lgwtupload_client_IUploader_1UploaderConstants_1_2_classLit = createForClass('gwtupload.client.', 'IUploader_UploaderConstants_'), Lgwtupload_client_ModalUploadStatus_2_classLit = createForClass('gwtupload.client.', 'ModalUploadStatus'), Lgwtupload_client_MultiUploader_2_classLit = createForClass('gwtupload.client.', 'MultiUploader'), Lgwtupload_client_MultiUploader$1_2_classLit = createForClass('gwtupload.client.', 'MultiUploader$1'), Lgwtupload_client_MultiUploader$2_2_classLit = createForClass('gwtupload.client.', 'MultiUploader$2'), Lgwtupload_client_MultiUploader$3_2_classLit = createForClass('gwtupload.client.', 'MultiUploader$3'), Lgwtupload_client_PreloadedImage_2_classLit = createForClass('gwtupload.client.', 'PreloadedImage'), Lgwtupload_client_PreloadedImage$1_2_classLit = createForClass('gwtupload.client.', 'PreloadedImage$1'), Lgwtupload_client_PreloadedImage$2_2_classLit = createForClass('gwtupload.client.', 'PreloadedImage$2'), Lgwtupload_client_Uploader_2_classLit = createForClass('gwtupload.client.', 'Uploader'), Lgwtupload_client_SingleUploader_2_classLit = createForClass('gwtupload.client.', 'SingleUploader'), Lgwtupload_client_SingleUploader$1_2_classLit = createForClass('gwtupload.client.', 'SingleUploader$1'), Lgwtupload_client_UpdateTimer_2_classLit = createForClass('gwtupload.client.', 'UpdateTimer'), Lgwtupload_client_UpdateTimer$1_2_classLit = createForClass('gwtupload.client.', 'UpdateTimer$1'), Lgwtupload_client_Uploader$FormFlowPanel_2_classLit = createForClass('gwtupload.client.', 'Uploader$FormFlowPanel'), Lgwtupload_client_Uploader$1_2_classLit = createForClass('gwtupload.client.', 'Uploader$1'), Lgwtupload_client_Uploader$2_2_classLit = createForClass('gwtupload.client.', 'Uploader$2'), Lgwtupload_client_Uploader$3_2_classLit = createForClass('gwtupload.client.', 'Uploader$3'), Lgwtupload_client_Uploader$4_2_classLit = createForClass('gwtupload.client.', 'Uploader$4'), Lgwtupload_client_Uploader$5_2_classLit = createForClass('gwtupload.client.', 'Uploader$5'), Lgwtupload_client_Uploader$6_2_classLit = createForClass('gwtupload.client.', 'Uploader$6'), Lgwtupload_client_Uploader$7_2_classLit = createForClass('gwtupload.client.', 'Uploader$7'), Lgwtupload_client_Uploader$8_2_classLit = createForClass('gwtupload.client.', 'Uploader$8'), Lgwtupload_client_Uploader$9_2_classLit = createForClass('gwtupload.client.', 'Uploader$9'), Lgwtupload_client_Uploader$10_2_classLit = createForClass('gwtupload.client.', 'Uploader$10'), Lgwtupload_client_Uploader$10$1_2_classLit = createForClass('gwtupload.client.', 'Uploader$10$1'), Lgwtupload_client_Uploader$11_2_classLit = createForClass('gwtupload.client.', 'Uploader$11'), Lgwtupload_client_Uploader$12_2_classLit = createForClass('gwtupload.client.', 'Uploader$12'), Lgwtupload_client_Uploader$13_2_classLit = createForClass('gwtupload.client.', 'Uploader$13'), Lgwtupload_client_Uploader$14_2_classLit = createForClass('gwtupload.client.', 'Uploader$14'), Lgwtupload_client_Uploader$15_2_classLit = createForClass('gwtupload.client.', 'Uploader$15'), Lgwtupload_client_Uploader$16_2_classLit = createForClass('gwtupload.client.', 'Uploader$16'), Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'), Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), Ljava_lang_Number_2_classLit = createForClass('java.lang.', 'Number'), Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'), Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'), Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'), Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'), Ljava_lang_Integer_2_classLit = createForClass('java.lang.', 'Integer'), _3Ljava_lang_Integer_2_classLit = createForArray('[Ljava.lang.', 'Integer;'), Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'), Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang.', 'NumberFormatException'), Ljava_lang_StringBuffer_2_classLit = createForClass('java.lang.', 'StringBuffer'), Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang.', 'UnsupportedOperationException'), Ljava_util_AbstractMap_2_classLit = createForClass('java.util.', 'AbstractMap'), Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util.', 'AbstractHashMap'), Ljava_util_AbstractSet_2_classLit = createForClass('java.util.', 'AbstractSet'), Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySet'), Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util.', 'AbstractHashMap$EntrySetIterator'), Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util.', 'AbstractMapEntry'), Ljava_util_AbstractHashMap$MapEntryNull_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryNull'), Ljava_util_AbstractHashMap$MapEntryString_2_classLit = createForClass('java.util.', 'AbstractHashMap$MapEntryString'), Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util.', 'AbstractList$IteratorImpl'), Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util.', 'AbstractMap$1'), Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util.', 'AbstractMap$1$1'), Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollection'), Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableList'), Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap'), Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableSet'), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet'), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry'), Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableMap$UnmodifiableEntrySet$1'), Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableRandomAccessList'), Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass('java.util.', 'Collections$UnmodifiableCollectionIterator'), Ljava_util_Date_2_classLit = createForClass('java.util.', 'Date'), Ljava_util_EnumSet_2_classLit = createForClass('java.util.', 'EnumSet'), Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass('java.util.', 'EnumSet$EnumSetImpl'), Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass('java.util.', 'EnumSet$EnumSetImpl$IteratorImpl'), Ljava_util_HashMap_2_classLit = createForClass('java.util.', 'HashMap'), Ljava_util_HashSet_2_classLit = createForClass('java.util.', 'HashSet'), Ljava_util_MapEntryImpl_2_classLit = createForClass('java.util.', 'MapEntryImpl'), Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util.', 'NoSuchElementException'), Ljava_util_Vector_2_classLit = createForClass('java.util.', 'Vector'), Ljsupload_client_ChismesUploadProgress_2_classLit = createForClass('jsupload.client.', 'ChismesUploadProgress'), Ljsupload_client_I18nConstants_2_classLit = createForClass('jsupload.client.', 'I18nConstants'), Ljsupload_client_IncubatorUploadProgress_2_classLit = createForClass('jsupload.client.', 'IncubatorUploadProgress'), Ljsupload_client_IncubatorUploadProgress$1_2_classLit = createForClass('jsupload.client.', 'IncubatorUploadProgress$1'), Ljsupload_client_JsUtils$3_2_classLit = createForClass('jsupload.client.', 'JsUtils$3'), Ljsupload_client_JsUtils$4_2_classLit = createForClass('jsupload.client.', 'JsUtils$4'), Ljsupload_client_JsUtils$5_2_classLit = createForClass('jsupload.client.', 'JsUtils$5'), Ljsupload_client_JsUtils$6_2_classLit = createForClass('jsupload.client.', 'JsUtils$6'), Ljsupload_client_JsUtils$7_2_classLit = createForClass('jsupload.client.', 'JsUtils$7'), Ljsupload_client_JsUtils$8_2_classLit = createForClass('jsupload.client.', 'JsUtils$8'), Ljsupload_client_JsProperties_2_classLit = createForClass('jsupload.client.', 'JsProperties'), Ljsupload_client_JsProperties$JSChangeClosureImpl_2_classLit = createForClass('jsupload.client.', 'JsProperties$JSChangeClosureImpl'), Ljsupload_client_Upload_2_classLit = createForClass('jsupload.client.', 'Upload'), Ljsupload_client_PreloadImage_2_classLit = createForClass('jsupload.client.', 'PreloadImage'), Ljsupload_client_JsUpload$1_2_classLit = createForClass('jsupload.client.', 'JsUpload$1'), Lorg_timepedia_exporter_client_ExporterBaseImpl_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseImpl'), Lorg_timepedia_exporter_client_ExporterBaseActual_2_classLit = createForClass('org.timepedia.exporter.client.', 'ExporterBaseActual');
$stats && $stats({moduleName:'jsupload',sessionId:$sessionId,subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});
if (jsupload) jsupload.onScriptLoad(gwtOnLoad);
})();
