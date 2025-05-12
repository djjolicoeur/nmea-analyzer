goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12805 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12805(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12810 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12810(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11706 = coll;
var G__11707 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11706,G__11707) : shadow.dom.lazy_native_coll_seq.call(null,G__11706,G__11707));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11733 = arguments.length;
switch (G__11733) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11736 = arguments.length;
switch (G__11736) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11741 = arguments.length;
switch (G__11741) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11745 = arguments.length;
switch (G__11745) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11758 = arguments.length;
switch (G__11758) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11778 = arguments.length;
switch (G__11778) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11795){if((e11795 instanceof Object)){
var e = e11795;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11795;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11833 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11834 = null;
var count__11835 = (0);
var i__11836 = (0);
while(true){
if((i__11836 < count__11835)){
var el = chunk__11834.cljs$core$IIndexed$_nth$arity$2(null,i__11836);
var handler_12912__$1 = ((function (seq__11833,chunk__11834,count__11835,i__11836,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11833,chunk__11834,count__11835,i__11836,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12912__$1);


var G__12926 = seq__11833;
var G__12927 = chunk__11834;
var G__12928 = count__11835;
var G__12929 = (i__11836 + (1));
seq__11833 = G__12926;
chunk__11834 = G__12927;
count__11835 = G__12928;
i__11836 = G__12929;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11833);
if(temp__5823__auto__){
var seq__11833__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11833__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11833__$1);
var G__12932 = cljs.core.chunk_rest(seq__11833__$1);
var G__12933 = c__5548__auto__;
var G__12934 = cljs.core.count(c__5548__auto__);
var G__12935 = (0);
seq__11833 = G__12932;
chunk__11834 = G__12933;
count__11835 = G__12934;
i__11836 = G__12935;
continue;
} else {
var el = cljs.core.first(seq__11833__$1);
var handler_12937__$1 = ((function (seq__11833,chunk__11834,count__11835,i__11836,el,seq__11833__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11833,chunk__11834,count__11835,i__11836,el,seq__11833__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12937__$1);


var G__12938 = cljs.core.next(seq__11833__$1);
var G__12939 = null;
var G__12940 = (0);
var G__12941 = (0);
seq__11833 = G__12938;
chunk__11834 = G__12939;
count__11835 = G__12940;
i__11836 = G__12941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11880 = arguments.length;
switch (G__11880) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11916 = cljs.core.seq(events);
var chunk__11917 = null;
var count__11918 = (0);
var i__11919 = (0);
while(true){
if((i__11919 < count__11918)){
var vec__11932 = chunk__11917.cljs$core$IIndexed$_nth$arity$2(null,i__11919);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11932,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13005 = seq__11916;
var G__13006 = chunk__11917;
var G__13007 = count__11918;
var G__13008 = (i__11919 + (1));
seq__11916 = G__13005;
chunk__11917 = G__13006;
count__11918 = G__13007;
i__11919 = G__13008;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11916);
if(temp__5823__auto__){
var seq__11916__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11916__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11916__$1);
var G__13019 = cljs.core.chunk_rest(seq__11916__$1);
var G__13020 = c__5548__auto__;
var G__13021 = cljs.core.count(c__5548__auto__);
var G__13022 = (0);
seq__11916 = G__13019;
chunk__11917 = G__13020;
count__11918 = G__13021;
i__11919 = G__13022;
continue;
} else {
var vec__11942 = cljs.core.first(seq__11916__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11942,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11942,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__13028 = cljs.core.next(seq__11916__$1);
var G__13029 = null;
var G__13030 = (0);
var G__13031 = (0);
seq__11916 = G__13028;
chunk__11917 = G__13029;
count__11918 = G__13030;
i__11919 = G__13031;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11953 = cljs.core.seq(styles);
var chunk__11954 = null;
var count__11955 = (0);
var i__11956 = (0);
while(true){
if((i__11956 < count__11955)){
var vec__12013 = chunk__11954.cljs$core$IIndexed$_nth$arity$2(null,i__11956);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12013,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13038 = seq__11953;
var G__13039 = chunk__11954;
var G__13040 = count__11955;
var G__13041 = (i__11956 + (1));
seq__11953 = G__13038;
chunk__11954 = G__13039;
count__11955 = G__13040;
i__11956 = G__13041;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11953);
if(temp__5823__auto__){
var seq__11953__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11953__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__11953__$1);
var G__13048 = cljs.core.chunk_rest(seq__11953__$1);
var G__13049 = c__5548__auto__;
var G__13050 = cljs.core.count(c__5548__auto__);
var G__13051 = (0);
seq__11953 = G__13048;
chunk__11954 = G__13049;
count__11955 = G__13050;
i__11956 = G__13051;
continue;
} else {
var vec__12059 = cljs.core.first(seq__11953__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12059,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12059,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__13052 = cljs.core.next(seq__11953__$1);
var G__13053 = null;
var G__13054 = (0);
var G__13055 = (0);
seq__11953 = G__13052;
chunk__11954 = G__13053;
count__11955 = G__13054;
i__11956 = G__13055;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__12091_13058 = key;
var G__12091_13059__$1 = (((G__12091_13058 instanceof cljs.core.Keyword))?G__12091_13058.fqn:null);
switch (G__12091_13059__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_13083 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_13083,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_13083,"aria-");
}
})())){
el.setAttribute(ks_13083,value);
} else {
(el[ks_13083] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__12185){
var map__12187 = p__12185;
var map__12187__$1 = cljs.core.__destructure_map(map__12187);
var props = map__12187__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12187__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__12188 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12188,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12188,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12188,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__12191 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__12191,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__12191;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__12193 = arguments.length;
switch (G__12193) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__12196){
var vec__12197 = p__12196;
var seq__12198 = cljs.core.seq(vec__12197);
var first__12199 = cljs.core.first(seq__12198);
var seq__12198__$1 = cljs.core.next(seq__12198);
var nn = first__12199;
var first__12199__$1 = cljs.core.first(seq__12198__$1);
var seq__12198__$2 = cljs.core.next(seq__12198__$1);
var np = first__12199__$1;
var nc = seq__12198__$2;
var node = vec__12197;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12200 = nn;
var G__12201 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12200,G__12201) : create_fn.call(null,G__12200,G__12201));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__12202 = nn;
var G__12203 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__12202,G__12203) : create_fn.call(null,G__12202,G__12203));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12206 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12206,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12206,(1),null);
var seq__12209_13192 = cljs.core.seq(node_children);
var chunk__12211_13193 = null;
var count__12212_13194 = (0);
var i__12213_13195 = (0);
while(true){
if((i__12213_13195 < count__12212_13194)){
var child_struct_13200 = chunk__12211_13193.cljs$core$IIndexed$_nth$arity$2(null,i__12213_13195);
var children_13202 = shadow.dom.dom_node(child_struct_13200);
if(cljs.core.seq_QMARK_(children_13202)){
var seq__12238_13212 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13202));
var chunk__12240_13213 = null;
var count__12241_13214 = (0);
var i__12242_13215 = (0);
while(true){
if((i__12242_13215 < count__12241_13214)){
var child_13217 = chunk__12240_13213.cljs$core$IIndexed$_nth$arity$2(null,i__12242_13215);
if(cljs.core.truth_(child_13217)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13217);


var G__13220 = seq__12238_13212;
var G__13221 = chunk__12240_13213;
var G__13222 = count__12241_13214;
var G__13223 = (i__12242_13215 + (1));
seq__12238_13212 = G__13220;
chunk__12240_13213 = G__13221;
count__12241_13214 = G__13222;
i__12242_13215 = G__13223;
continue;
} else {
var G__13224 = seq__12238_13212;
var G__13225 = chunk__12240_13213;
var G__13226 = count__12241_13214;
var G__13227 = (i__12242_13215 + (1));
seq__12238_13212 = G__13224;
chunk__12240_13213 = G__13225;
count__12241_13214 = G__13226;
i__12242_13215 = G__13227;
continue;
}
} else {
var temp__5823__auto___13228 = cljs.core.seq(seq__12238_13212);
if(temp__5823__auto___13228){
var seq__12238_13229__$1 = temp__5823__auto___13228;
if(cljs.core.chunked_seq_QMARK_(seq__12238_13229__$1)){
var c__5548__auto___13230 = cljs.core.chunk_first(seq__12238_13229__$1);
var G__13232 = cljs.core.chunk_rest(seq__12238_13229__$1);
var G__13233 = c__5548__auto___13230;
var G__13234 = cljs.core.count(c__5548__auto___13230);
var G__13235 = (0);
seq__12238_13212 = G__13232;
chunk__12240_13213 = G__13233;
count__12241_13214 = G__13234;
i__12242_13215 = G__13235;
continue;
} else {
var child_13237 = cljs.core.first(seq__12238_13229__$1);
if(cljs.core.truth_(child_13237)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13237);


var G__13238 = cljs.core.next(seq__12238_13229__$1);
var G__13239 = null;
var G__13240 = (0);
var G__13241 = (0);
seq__12238_13212 = G__13238;
chunk__12240_13213 = G__13239;
count__12241_13214 = G__13240;
i__12242_13215 = G__13241;
continue;
} else {
var G__13242 = cljs.core.next(seq__12238_13229__$1);
var G__13243 = null;
var G__13244 = (0);
var G__13245 = (0);
seq__12238_13212 = G__13242;
chunk__12240_13213 = G__13243;
count__12241_13214 = G__13244;
i__12242_13215 = G__13245;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13202);
}


var G__13246 = seq__12209_13192;
var G__13247 = chunk__12211_13193;
var G__13248 = count__12212_13194;
var G__13249 = (i__12213_13195 + (1));
seq__12209_13192 = G__13246;
chunk__12211_13193 = G__13247;
count__12212_13194 = G__13248;
i__12213_13195 = G__13249;
continue;
} else {
var temp__5823__auto___13251 = cljs.core.seq(seq__12209_13192);
if(temp__5823__auto___13251){
var seq__12209_13254__$1 = temp__5823__auto___13251;
if(cljs.core.chunked_seq_QMARK_(seq__12209_13254__$1)){
var c__5548__auto___13257 = cljs.core.chunk_first(seq__12209_13254__$1);
var G__13258 = cljs.core.chunk_rest(seq__12209_13254__$1);
var G__13259 = c__5548__auto___13257;
var G__13260 = cljs.core.count(c__5548__auto___13257);
var G__13261 = (0);
seq__12209_13192 = G__13258;
chunk__12211_13193 = G__13259;
count__12212_13194 = G__13260;
i__12213_13195 = G__13261;
continue;
} else {
var child_struct_13263 = cljs.core.first(seq__12209_13254__$1);
var children_13264 = shadow.dom.dom_node(child_struct_13263);
if(cljs.core.seq_QMARK_(children_13264)){
var seq__12250_13265 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_13264));
var chunk__12252_13266 = null;
var count__12253_13267 = (0);
var i__12254_13268 = (0);
while(true){
if((i__12254_13268 < count__12253_13267)){
var child_13269 = chunk__12252_13266.cljs$core$IIndexed$_nth$arity$2(null,i__12254_13268);
if(cljs.core.truth_(child_13269)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13269);


var G__13271 = seq__12250_13265;
var G__13272 = chunk__12252_13266;
var G__13273 = count__12253_13267;
var G__13274 = (i__12254_13268 + (1));
seq__12250_13265 = G__13271;
chunk__12252_13266 = G__13272;
count__12253_13267 = G__13273;
i__12254_13268 = G__13274;
continue;
} else {
var G__13275 = seq__12250_13265;
var G__13276 = chunk__12252_13266;
var G__13277 = count__12253_13267;
var G__13278 = (i__12254_13268 + (1));
seq__12250_13265 = G__13275;
chunk__12252_13266 = G__13276;
count__12253_13267 = G__13277;
i__12254_13268 = G__13278;
continue;
}
} else {
var temp__5823__auto___13281__$1 = cljs.core.seq(seq__12250_13265);
if(temp__5823__auto___13281__$1){
var seq__12250_13285__$1 = temp__5823__auto___13281__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12250_13285__$1)){
var c__5548__auto___13286 = cljs.core.chunk_first(seq__12250_13285__$1);
var G__13288 = cljs.core.chunk_rest(seq__12250_13285__$1);
var G__13289 = c__5548__auto___13286;
var G__13290 = cljs.core.count(c__5548__auto___13286);
var G__13291 = (0);
seq__12250_13265 = G__13288;
chunk__12252_13266 = G__13289;
count__12253_13267 = G__13290;
i__12254_13268 = G__13291;
continue;
} else {
var child_13292 = cljs.core.first(seq__12250_13285__$1);
if(cljs.core.truth_(child_13292)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_13292);


var G__13294 = cljs.core.next(seq__12250_13285__$1);
var G__13295 = null;
var G__13296 = (0);
var G__13297 = (0);
seq__12250_13265 = G__13294;
chunk__12252_13266 = G__13295;
count__12253_13267 = G__13296;
i__12254_13268 = G__13297;
continue;
} else {
var G__13299 = cljs.core.next(seq__12250_13285__$1);
var G__13300 = null;
var G__13301 = (0);
var G__13302 = (0);
seq__12250_13265 = G__13299;
chunk__12252_13266 = G__13300;
count__12253_13267 = G__13301;
i__12254_13268 = G__13302;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_13264);
}


var G__13303 = cljs.core.next(seq__12209_13254__$1);
var G__13304 = null;
var G__13305 = (0);
var G__13306 = (0);
seq__12209_13192 = G__13303;
chunk__12211_13193 = G__13304;
count__12212_13194 = G__13305;
i__12213_13195 = G__13306;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12277 = cljs.core.seq(node);
var chunk__12278 = null;
var count__12279 = (0);
var i__12280 = (0);
while(true){
if((i__12280 < count__12279)){
var n = chunk__12278.cljs$core$IIndexed$_nth$arity$2(null,i__12280);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13401 = seq__12277;
var G__13402 = chunk__12278;
var G__13403 = count__12279;
var G__13404 = (i__12280 + (1));
seq__12277 = G__13401;
chunk__12278 = G__13402;
count__12279 = G__13403;
i__12280 = G__13404;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12277);
if(temp__5823__auto__){
var seq__12277__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12277__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12277__$1);
var G__13411 = cljs.core.chunk_rest(seq__12277__$1);
var G__13412 = c__5548__auto__;
var G__13413 = cljs.core.count(c__5548__auto__);
var G__13414 = (0);
seq__12277 = G__13411;
chunk__12278 = G__13412;
count__12279 = G__13413;
i__12280 = G__13414;
continue;
} else {
var n = cljs.core.first(seq__12277__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__13419 = cljs.core.next(seq__12277__$1);
var G__13420 = null;
var G__13421 = (0);
var G__13422 = (0);
seq__12277 = G__13419;
chunk__12278 = G__13420;
count__12279 = G__13421;
i__12280 = G__13422;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12288 = arguments.length;
switch (G__12288) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12293 = arguments.length;
switch (G__12293) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12301 = arguments.length;
switch (G__12301) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___13499 = arguments.length;
var i__5750__auto___13500 = (0);
while(true){
if((i__5750__auto___13500 < len__5749__auto___13499)){
args__5755__auto__.push((arguments[i__5750__auto___13500]));

var G__13502 = (i__5750__auto___13500 + (1));
i__5750__auto___13500 = G__13502;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12316_13505 = cljs.core.seq(nodes);
var chunk__12317_13506 = null;
var count__12318_13507 = (0);
var i__12319_13508 = (0);
while(true){
if((i__12319_13508 < count__12318_13507)){
var node_13509 = chunk__12317_13506.cljs$core$IIndexed$_nth$arity$2(null,i__12319_13508);
fragment.appendChild(shadow.dom._to_dom(node_13509));


var G__13515 = seq__12316_13505;
var G__13516 = chunk__12317_13506;
var G__13517 = count__12318_13507;
var G__13518 = (i__12319_13508 + (1));
seq__12316_13505 = G__13515;
chunk__12317_13506 = G__13516;
count__12318_13507 = G__13517;
i__12319_13508 = G__13518;
continue;
} else {
var temp__5823__auto___13521 = cljs.core.seq(seq__12316_13505);
if(temp__5823__auto___13521){
var seq__12316_13522__$1 = temp__5823__auto___13521;
if(cljs.core.chunked_seq_QMARK_(seq__12316_13522__$1)){
var c__5548__auto___13525 = cljs.core.chunk_first(seq__12316_13522__$1);
var G__13542 = cljs.core.chunk_rest(seq__12316_13522__$1);
var G__13543 = c__5548__auto___13525;
var G__13544 = cljs.core.count(c__5548__auto___13525);
var G__13545 = (0);
seq__12316_13505 = G__13542;
chunk__12317_13506 = G__13543;
count__12318_13507 = G__13544;
i__12319_13508 = G__13545;
continue;
} else {
var node_13546 = cljs.core.first(seq__12316_13522__$1);
fragment.appendChild(shadow.dom._to_dom(node_13546));


var G__13547 = cljs.core.next(seq__12316_13522__$1);
var G__13548 = null;
var G__13549 = (0);
var G__13550 = (0);
seq__12316_13505 = G__13547;
chunk__12317_13506 = G__13548;
count__12318_13507 = G__13549;
i__12319_13508 = G__13550;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12308){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12308));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12340_13555 = cljs.core.seq(scripts);
var chunk__12341_13556 = null;
var count__12342_13557 = (0);
var i__12343_13558 = (0);
while(true){
if((i__12343_13558 < count__12342_13557)){
var vec__12354_13560 = chunk__12341_13556.cljs$core$IIndexed$_nth$arity$2(null,i__12343_13558);
var script_tag_13561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13560,(0),null);
var script_body_13562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12354_13560,(1),null);
eval(script_body_13562);


var G__13568 = seq__12340_13555;
var G__13569 = chunk__12341_13556;
var G__13570 = count__12342_13557;
var G__13571 = (i__12343_13558 + (1));
seq__12340_13555 = G__13568;
chunk__12341_13556 = G__13569;
count__12342_13557 = G__13570;
i__12343_13558 = G__13571;
continue;
} else {
var temp__5823__auto___13573 = cljs.core.seq(seq__12340_13555);
if(temp__5823__auto___13573){
var seq__12340_13575__$1 = temp__5823__auto___13573;
if(cljs.core.chunked_seq_QMARK_(seq__12340_13575__$1)){
var c__5548__auto___13576 = cljs.core.chunk_first(seq__12340_13575__$1);
var G__13578 = cljs.core.chunk_rest(seq__12340_13575__$1);
var G__13579 = c__5548__auto___13576;
var G__13580 = cljs.core.count(c__5548__auto___13576);
var G__13581 = (0);
seq__12340_13555 = G__13578;
chunk__12341_13556 = G__13579;
count__12342_13557 = G__13580;
i__12343_13558 = G__13581;
continue;
} else {
var vec__12358_13582 = cljs.core.first(seq__12340_13575__$1);
var script_tag_13583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358_13582,(0),null);
var script_body_13584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12358_13582,(1),null);
eval(script_body_13584);


var G__13624 = cljs.core.next(seq__12340_13575__$1);
var G__13625 = null;
var G__13626 = (0);
var G__13627 = (0);
seq__12340_13555 = G__13624;
chunk__12341_13556 = G__13625;
count__12342_13557 = G__13626;
i__12343_13558 = G__13627;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12362){
var vec__12363 = p__12362;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12363,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12363,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12380 = arguments.length;
switch (G__12380) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12397 = cljs.core.seq(style_keys);
var chunk__12398 = null;
var count__12399 = (0);
var i__12400 = (0);
while(true){
if((i__12400 < count__12399)){
var it = chunk__12398.cljs$core$IIndexed$_nth$arity$2(null,i__12400);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13663 = seq__12397;
var G__13664 = chunk__12398;
var G__13665 = count__12399;
var G__13666 = (i__12400 + (1));
seq__12397 = G__13663;
chunk__12398 = G__13664;
count__12399 = G__13665;
i__12400 = G__13666;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__12397);
if(temp__5823__auto__){
var seq__12397__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12397__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__12397__$1);
var G__13669 = cljs.core.chunk_rest(seq__12397__$1);
var G__13670 = c__5548__auto__;
var G__13671 = cljs.core.count(c__5548__auto__);
var G__13672 = (0);
seq__12397 = G__13669;
chunk__12398 = G__13670;
count__12399 = G__13671;
i__12400 = G__13672;
continue;
} else {
var it = cljs.core.first(seq__12397__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13688 = cljs.core.next(seq__12397__$1);
var G__13689 = null;
var G__13690 = (0);
var G__13691 = (0);
seq__12397 = G__13688;
chunk__12398 = G__13689;
count__12399 = G__13690;
i__12400 = G__13691;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12408,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12431 = k12408;
var G__12431__$1 = (((G__12431 instanceof cljs.core.Keyword))?G__12431.fqn:null);
switch (G__12431__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12408,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12435){
var vec__12437 = p__12435;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12407){
var self__ = this;
var G__12407__$1 = this;
return (new cljs.core.RecordIter((0),G__12407__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12409,other12410){
var self__ = this;
var this12409__$1 = this;
return (((!((other12410 == null)))) && ((((this12409__$1.constructor === other12410.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12409__$1.x,other12410.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12409__$1.y,other12410.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12409__$1.__extmap,other12410.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12408){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12453 = k12408;
var G__12453__$1 = (((G__12453 instanceof cljs.core.Keyword))?G__12453.fqn:null);
switch (G__12453__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12408);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12407){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12454 = cljs.core.keyword_identical_QMARK_;
var expr__12455 = k__5332__auto__;
if(cljs.core.truth_((pred__12454.cljs$core$IFn$_invoke$arity$2 ? pred__12454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12455) : pred__12454.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12455)))){
return (new shadow.dom.Coordinate(G__12407,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12454.cljs$core$IFn$_invoke$arity$2 ? pred__12454.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12455) : pred__12454.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12455)))){
return (new shadow.dom.Coordinate(self__.x,G__12407,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12407),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12407){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12407,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12420){
var extmap__5365__auto__ = (function (){var G__12472 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12472);
} else {
return G__12472;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12420),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k12480,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__12491 = k12480;
var G__12491__$1 = (((G__12491 instanceof cljs.core.Keyword))?G__12491.fqn:null);
switch (G__12491__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12480,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__12501){
var vec__12502 = p__12501;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12502,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12502,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12479){
var self__ = this;
var G__12479__$1 = this;
return (new cljs.core.RecordIter((0),G__12479__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12481,other12482){
var self__ = this;
var this12481__$1 = this;
return (((!((other12482 == null)))) && ((((this12481__$1.constructor === other12482.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12481__$1.w,other12482.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12481__$1.h,other12482.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12481__$1.__extmap,other12482.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k12480){
var self__ = this;
var this__5330__auto____$1 = this;
var G__12518 = k12480;
var G__12518__$1 = (((G__12518 instanceof cljs.core.Keyword))?G__12518.fqn:null);
switch (G__12518__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12480);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__12479){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__12519 = cljs.core.keyword_identical_QMARK_;
var expr__12520 = k__5332__auto__;
if(cljs.core.truth_((pred__12519.cljs$core$IFn$_invoke$arity$2 ? pred__12519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12520) : pred__12519.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12520)))){
return (new shadow.dom.Size(G__12479,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12519.cljs$core$IFn$_invoke$arity$2 ? pred__12519.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12520) : pred__12519.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12520)))){
return (new shadow.dom.Size(self__.w,G__12479,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__12479),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__12479){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12479,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12486){
var extmap__5365__auto__ = (function (){var G__12529 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12486,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12486)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12529);
} else {
return G__12529;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12486),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12486),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__13861 = (i + (1));
var G__13862 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13861;
ret = G__13862;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12560){
var vec__12561 = p__12560;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12561,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12569 = arguments.length;
switch (G__12569) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13894 = ps;
var G__13895 = (i + (1));
el__$1 = G__13894;
i = G__13895;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12604 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12604,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12617_13917 = cljs.core.seq(props);
var chunk__12618_13918 = null;
var count__12619_13919 = (0);
var i__12620_13920 = (0);
while(true){
if((i__12620_13920 < count__12619_13919)){
var vec__12634_13922 = chunk__12618_13918.cljs$core$IIndexed$_nth$arity$2(null,i__12620_13920);
var k_13923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634_13922,(0),null);
var v_13924 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12634_13922,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_13923);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13923),v_13924);


var G__13931 = seq__12617_13917;
var G__13932 = chunk__12618_13918;
var G__13933 = count__12619_13919;
var G__13934 = (i__12620_13920 + (1));
seq__12617_13917 = G__13931;
chunk__12618_13918 = G__13932;
count__12619_13919 = G__13933;
i__12620_13920 = G__13934;
continue;
} else {
var temp__5823__auto___13935 = cljs.core.seq(seq__12617_13917);
if(temp__5823__auto___13935){
var seq__12617_13936__$1 = temp__5823__auto___13935;
if(cljs.core.chunked_seq_QMARK_(seq__12617_13936__$1)){
var c__5548__auto___13937 = cljs.core.chunk_first(seq__12617_13936__$1);
var G__13938 = cljs.core.chunk_rest(seq__12617_13936__$1);
var G__13939 = c__5548__auto___13937;
var G__13940 = cljs.core.count(c__5548__auto___13937);
var G__13941 = (0);
seq__12617_13917 = G__13938;
chunk__12618_13918 = G__13939;
count__12619_13919 = G__13940;
i__12620_13920 = G__13941;
continue;
} else {
var vec__12639_13942 = cljs.core.first(seq__12617_13936__$1);
var k_13943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639_13942,(0),null);
var v_13944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12639_13942,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_13943);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13943),v_13944);


var G__13948 = cljs.core.next(seq__12617_13936__$1);
var G__13949 = null;
var G__13950 = (0);
var G__13951 = (0);
seq__12617_13917 = G__13948;
chunk__12618_13918 = G__13949;
count__12619_13919 = G__13950;
i__12620_13920 = G__13951;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12654 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12654,(1),null);
var seq__12658_13955 = cljs.core.seq(node_children);
var chunk__12660_13956 = null;
var count__12661_13957 = (0);
var i__12662_13958 = (0);
while(true){
if((i__12662_13958 < count__12661_13957)){
var child_struct_13959 = chunk__12660_13956.cljs$core$IIndexed$_nth$arity$2(null,i__12662_13958);
if((!((child_struct_13959 == null)))){
if(typeof child_struct_13959 === 'string'){
var text_13960 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13960),child_struct_13959].join(''));
} else {
var children_13964 = shadow.dom.svg_node(child_struct_13959);
if(cljs.core.seq_QMARK_(children_13964)){
var seq__12706_13965 = cljs.core.seq(children_13964);
var chunk__12708_13966 = null;
var count__12709_13967 = (0);
var i__12710_13968 = (0);
while(true){
if((i__12710_13968 < count__12709_13967)){
var child_13969 = chunk__12708_13966.cljs$core$IIndexed$_nth$arity$2(null,i__12710_13968);
if(cljs.core.truth_(child_13969)){
node.appendChild(child_13969);


var G__13970 = seq__12706_13965;
var G__13971 = chunk__12708_13966;
var G__13972 = count__12709_13967;
var G__13973 = (i__12710_13968 + (1));
seq__12706_13965 = G__13970;
chunk__12708_13966 = G__13971;
count__12709_13967 = G__13972;
i__12710_13968 = G__13973;
continue;
} else {
var G__13974 = seq__12706_13965;
var G__13975 = chunk__12708_13966;
var G__13976 = count__12709_13967;
var G__13977 = (i__12710_13968 + (1));
seq__12706_13965 = G__13974;
chunk__12708_13966 = G__13975;
count__12709_13967 = G__13976;
i__12710_13968 = G__13977;
continue;
}
} else {
var temp__5823__auto___13979 = cljs.core.seq(seq__12706_13965);
if(temp__5823__auto___13979){
var seq__12706_13981__$1 = temp__5823__auto___13979;
if(cljs.core.chunked_seq_QMARK_(seq__12706_13981__$1)){
var c__5548__auto___13982 = cljs.core.chunk_first(seq__12706_13981__$1);
var G__13983 = cljs.core.chunk_rest(seq__12706_13981__$1);
var G__13984 = c__5548__auto___13982;
var G__13985 = cljs.core.count(c__5548__auto___13982);
var G__13986 = (0);
seq__12706_13965 = G__13983;
chunk__12708_13966 = G__13984;
count__12709_13967 = G__13985;
i__12710_13968 = G__13986;
continue;
} else {
var child_13987 = cljs.core.first(seq__12706_13981__$1);
if(cljs.core.truth_(child_13987)){
node.appendChild(child_13987);


var G__13989 = cljs.core.next(seq__12706_13981__$1);
var G__13990 = null;
var G__13991 = (0);
var G__13992 = (0);
seq__12706_13965 = G__13989;
chunk__12708_13966 = G__13990;
count__12709_13967 = G__13991;
i__12710_13968 = G__13992;
continue;
} else {
var G__14000 = cljs.core.next(seq__12706_13981__$1);
var G__14001 = null;
var G__14002 = (0);
var G__14003 = (0);
seq__12706_13965 = G__14000;
chunk__12708_13966 = G__14001;
count__12709_13967 = G__14002;
i__12710_13968 = G__14003;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13964);
}
}


var G__14004 = seq__12658_13955;
var G__14005 = chunk__12660_13956;
var G__14006 = count__12661_13957;
var G__14007 = (i__12662_13958 + (1));
seq__12658_13955 = G__14004;
chunk__12660_13956 = G__14005;
count__12661_13957 = G__14006;
i__12662_13958 = G__14007;
continue;
} else {
var G__14009 = seq__12658_13955;
var G__14010 = chunk__12660_13956;
var G__14011 = count__12661_13957;
var G__14012 = (i__12662_13958 + (1));
seq__12658_13955 = G__14009;
chunk__12660_13956 = G__14010;
count__12661_13957 = G__14011;
i__12662_13958 = G__14012;
continue;
}
} else {
var temp__5823__auto___14013 = cljs.core.seq(seq__12658_13955);
if(temp__5823__auto___14013){
var seq__12658_14014__$1 = temp__5823__auto___14013;
if(cljs.core.chunked_seq_QMARK_(seq__12658_14014__$1)){
var c__5548__auto___14015 = cljs.core.chunk_first(seq__12658_14014__$1);
var G__14016 = cljs.core.chunk_rest(seq__12658_14014__$1);
var G__14017 = c__5548__auto___14015;
var G__14018 = cljs.core.count(c__5548__auto___14015);
var G__14019 = (0);
seq__12658_13955 = G__14016;
chunk__12660_13956 = G__14017;
count__12661_13957 = G__14018;
i__12662_13958 = G__14019;
continue;
} else {
var child_struct_14020 = cljs.core.first(seq__12658_14014__$1);
if((!((child_struct_14020 == null)))){
if(typeof child_struct_14020 === 'string'){
var text_14022 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_14022),child_struct_14020].join(''));
} else {
var children_14023 = shadow.dom.svg_node(child_struct_14020);
if(cljs.core.seq_QMARK_(children_14023)){
var seq__12728_14024 = cljs.core.seq(children_14023);
var chunk__12730_14025 = null;
var count__12731_14026 = (0);
var i__12732_14027 = (0);
while(true){
if((i__12732_14027 < count__12731_14026)){
var child_14032 = chunk__12730_14025.cljs$core$IIndexed$_nth$arity$2(null,i__12732_14027);
if(cljs.core.truth_(child_14032)){
node.appendChild(child_14032);


var G__14033 = seq__12728_14024;
var G__14034 = chunk__12730_14025;
var G__14035 = count__12731_14026;
var G__14036 = (i__12732_14027 + (1));
seq__12728_14024 = G__14033;
chunk__12730_14025 = G__14034;
count__12731_14026 = G__14035;
i__12732_14027 = G__14036;
continue;
} else {
var G__14037 = seq__12728_14024;
var G__14038 = chunk__12730_14025;
var G__14039 = count__12731_14026;
var G__14040 = (i__12732_14027 + (1));
seq__12728_14024 = G__14037;
chunk__12730_14025 = G__14038;
count__12731_14026 = G__14039;
i__12732_14027 = G__14040;
continue;
}
} else {
var temp__5823__auto___14041__$1 = cljs.core.seq(seq__12728_14024);
if(temp__5823__auto___14041__$1){
var seq__12728_14042__$1 = temp__5823__auto___14041__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12728_14042__$1)){
var c__5548__auto___14043 = cljs.core.chunk_first(seq__12728_14042__$1);
var G__14044 = cljs.core.chunk_rest(seq__12728_14042__$1);
var G__14045 = c__5548__auto___14043;
var G__14046 = cljs.core.count(c__5548__auto___14043);
var G__14047 = (0);
seq__12728_14024 = G__14044;
chunk__12730_14025 = G__14045;
count__12731_14026 = G__14046;
i__12732_14027 = G__14047;
continue;
} else {
var child_14048 = cljs.core.first(seq__12728_14042__$1);
if(cljs.core.truth_(child_14048)){
node.appendChild(child_14048);


var G__14049 = cljs.core.next(seq__12728_14042__$1);
var G__14050 = null;
var G__14051 = (0);
var G__14052 = (0);
seq__12728_14024 = G__14049;
chunk__12730_14025 = G__14050;
count__12731_14026 = G__14051;
i__12732_14027 = G__14052;
continue;
} else {
var G__14053 = cljs.core.next(seq__12728_14042__$1);
var G__14054 = null;
var G__14055 = (0);
var G__14056 = (0);
seq__12728_14024 = G__14053;
chunk__12730_14025 = G__14054;
count__12731_14026 = G__14055;
i__12732_14027 = G__14056;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_14023);
}
}


var G__14057 = cljs.core.next(seq__12658_14014__$1);
var G__14058 = null;
var G__14059 = (0);
var G__14060 = (0);
seq__12658_13955 = G__14057;
chunk__12660_13956 = G__14058;
count__12661_13957 = G__14059;
i__12662_13958 = G__14060;
continue;
} else {
var G__14061 = cljs.core.next(seq__12658_14014__$1);
var G__14062 = null;
var G__14063 = (0);
var G__14064 = (0);
seq__12658_13955 = G__14061;
chunk__12660_13956 = G__14062;
count__12661_13957 = G__14063;
i__12662_13958 = G__14064;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___14066 = arguments.length;
var i__5750__auto___14067 = (0);
while(true){
if((i__5750__auto___14067 < len__5749__auto___14066)){
args__5755__auto__.push((arguments[i__5750__auto___14067]));

var G__14072 = (i__5750__auto___14067 + (1));
i__5750__auto___14067 = G__14072;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12752){
var G__12754 = cljs.core.first(seq12752);
var seq12752__$1 = cljs.core.next(seq12752);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12754,seq12752__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
