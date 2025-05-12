goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18525){
var map__18526 = p__18525;
var map__18526__$1 = cljs.core.__destructure_map(map__18526);
var m = map__18526__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18526__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18526__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18537_19022 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18538_19023 = null;
var count__18539_19024 = (0);
var i__18540_19025 = (0);
while(true){
if((i__18540_19025 < count__18539_19024)){
var f_19027 = chunk__18538_19023.cljs$core$IIndexed$_nth$arity$2(null,i__18540_19025);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19027], 0));


var G__19028 = seq__18537_19022;
var G__19029 = chunk__18538_19023;
var G__19030 = count__18539_19024;
var G__19031 = (i__18540_19025 + (1));
seq__18537_19022 = G__19028;
chunk__18538_19023 = G__19029;
count__18539_19024 = G__19030;
i__18540_19025 = G__19031;
continue;
} else {
var temp__5823__auto___19035 = cljs.core.seq(seq__18537_19022);
if(temp__5823__auto___19035){
var seq__18537_19038__$1 = temp__5823__auto___19035;
if(cljs.core.chunked_seq_QMARK_(seq__18537_19038__$1)){
var c__5548__auto___19039 = cljs.core.chunk_first(seq__18537_19038__$1);
var G__19042 = cljs.core.chunk_rest(seq__18537_19038__$1);
var G__19043 = c__5548__auto___19039;
var G__19044 = cljs.core.count(c__5548__auto___19039);
var G__19045 = (0);
seq__18537_19022 = G__19042;
chunk__18538_19023 = G__19043;
count__18539_19024 = G__19044;
i__18540_19025 = G__19045;
continue;
} else {
var f_19049 = cljs.core.first(seq__18537_19038__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19049], 0));


var G__19057 = cljs.core.next(seq__18537_19038__$1);
var G__19058 = null;
var G__19059 = (0);
var G__19060 = (0);
seq__18537_19022 = G__19057;
chunk__18538_19023 = G__19058;
count__18539_19024 = G__19059;
i__18540_19025 = G__19060;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19061 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19061], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19061)))?cljs.core.second(arglists_19061):arglists_19061)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18593_19076 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18594_19077 = null;
var count__18595_19078 = (0);
var i__18596_19079 = (0);
while(true){
if((i__18596_19079 < count__18595_19078)){
var vec__18627_19080 = chunk__18594_19077.cljs$core$IIndexed$_nth$arity$2(null,i__18596_19079);
var name_19081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627_19080,(0),null);
var map__18630_19082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18627_19080,(1),null);
var map__18630_19083__$1 = cljs.core.__destructure_map(map__18630_19082);
var doc_19084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18630_19083__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18630_19083__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19081], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19085], 0));

if(cljs.core.truth_(doc_19084)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19084], 0));
} else {
}


var G__19090 = seq__18593_19076;
var G__19091 = chunk__18594_19077;
var G__19092 = count__18595_19078;
var G__19093 = (i__18596_19079 + (1));
seq__18593_19076 = G__19090;
chunk__18594_19077 = G__19091;
count__18595_19078 = G__19092;
i__18596_19079 = G__19093;
continue;
} else {
var temp__5823__auto___19095 = cljs.core.seq(seq__18593_19076);
if(temp__5823__auto___19095){
var seq__18593_19096__$1 = temp__5823__auto___19095;
if(cljs.core.chunked_seq_QMARK_(seq__18593_19096__$1)){
var c__5548__auto___19098 = cljs.core.chunk_first(seq__18593_19096__$1);
var G__19101 = cljs.core.chunk_rest(seq__18593_19096__$1);
var G__19102 = c__5548__auto___19098;
var G__19103 = cljs.core.count(c__5548__auto___19098);
var G__19104 = (0);
seq__18593_19076 = G__19101;
chunk__18594_19077 = G__19102;
count__18595_19078 = G__19103;
i__18596_19079 = G__19104;
continue;
} else {
var vec__18656_19105 = cljs.core.first(seq__18593_19096__$1);
var name_19106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656_19105,(0),null);
var map__18659_19107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18656_19105,(1),null);
var map__18659_19108__$1 = cljs.core.__destructure_map(map__18659_19107);
var doc_19109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659_19108__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659_19108__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19106], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19110], 0));

if(cljs.core.truth_(doc_19109)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19109], 0));
} else {
}


var G__19118 = cljs.core.next(seq__18593_19096__$1);
var G__19119 = null;
var G__19120 = (0);
var G__19121 = (0);
seq__18593_19076 = G__19118;
chunk__18594_19077 = G__19119;
count__18595_19078 = G__19120;
i__18596_19079 = G__19121;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18662 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18666 = null;
var count__18667 = (0);
var i__18669 = (0);
while(true){
if((i__18669 < count__18667)){
var role = chunk__18666.cljs$core$IIndexed$_nth$arity$2(null,i__18669);
var temp__5823__auto___19125__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19125__$1)){
var spec_19128 = temp__5823__auto___19125__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19128)], 0));
} else {
}


var G__19131 = seq__18662;
var G__19132 = chunk__18666;
var G__19133 = count__18667;
var G__19134 = (i__18669 + (1));
seq__18662 = G__19131;
chunk__18666 = G__19132;
count__18667 = G__19133;
i__18669 = G__19134;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18662);
if(temp__5823__auto____$1){
var seq__18662__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18662__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__18662__$1);
var G__19135 = cljs.core.chunk_rest(seq__18662__$1);
var G__19136 = c__5548__auto__;
var G__19137 = cljs.core.count(c__5548__auto__);
var G__19138 = (0);
seq__18662 = G__19135;
chunk__18666 = G__19136;
count__18667 = G__19137;
i__18669 = G__19138;
continue;
} else {
var role = cljs.core.first(seq__18662__$1);
var temp__5823__auto___19140__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19140__$2)){
var spec_19141 = temp__5823__auto___19140__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19141)], 0));
} else {
}


var G__19144 = cljs.core.next(seq__18662__$1);
var G__19145 = null;
var G__19146 = (0);
var G__19147 = (0);
seq__18662 = G__19144;
chunk__18666 = G__19145;
count__18667 = G__19146;
i__18669 = G__19147;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18808 = datafied_throwable;
var map__18808__$1 = cljs.core.__destructure_map(map__18808);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18808__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18808__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18809 = cljs.core.last(via);
var map__18809__$1 = cljs.core.__destructure_map(map__18809);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18809__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18810 = data;
var map__18810__$1 = cljs.core.__destructure_map(map__18810);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18810__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18811 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18811__$1 = cljs.core.__destructure_map(map__18811);
var top_data = map__18811__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18811__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18834 = phase;
var G__18834__$1 = (((G__18834 instanceof cljs.core.Keyword))?G__18834.fqn:null);
switch (G__18834__$1) {
case "read-source":
var map__18843 = data;
var map__18843__$1 = cljs.core.__destructure_map(map__18843);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18843__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18850 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18850__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18850);
var G__18850__$2 = (cljs.core.truth_((function (){var fexpr__18854 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18854.cljs$core$IFn$_invoke$arity$1 ? fexpr__18854.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18854.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18850__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18850__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18850__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18850__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18855 = top_data;
var G__18855__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18855,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18855);
var G__18855__$2 = (cljs.core.truth_((function (){var fexpr__18864 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18864.cljs$core$IFn$_invoke$arity$1 ? fexpr__18864.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18864.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18855__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18855__$1);
var G__18855__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18855__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18855__$2);
var G__18855__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18855__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18855__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18855__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18855__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18867,(3),null);
var G__18873 = top_data;
var G__18873__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18873);
var G__18873__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18873__$1);
var G__18873__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18873__$2);
var G__18873__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18873__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18873__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18873__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18873__$4;
}

break;
case "execution":
var vec__18876 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18876,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18772_SHARP_){
var or__5025__auto__ = (p1__18772_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var fexpr__18881 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18881.cljs$core$IFn$_invoke$arity$1 ? fexpr__18881.cljs$core$IFn$_invoke$arity$1(p1__18772_SHARP_) : fexpr__18881.call(null,p1__18772_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return line;
}
})();
var G__18882 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18882__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18882,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18882);
var G__18882__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18882__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18882__$1);
var G__18882__$3 = (cljs.core.truth_((function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = source__$1;
if(cljs.core.truth_(and__5023__auto__)){
return method;
} else {
return and__5023__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18882__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5025__auto__ = fn;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18882__$2);
var G__18882__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18882__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18882__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18882__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18882__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18834__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18908){
var map__18909 = p__18908;
var map__18909__$1 = cljs.core.__destructure_map(map__18909);
var triage_data = map__18909__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18909__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = source;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = line;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5025__auto__ = class$;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18913 = phase;
var G__18913__$1 = (((G__18913 instanceof cljs.core.Keyword))?G__18913.fqn:null);
switch (G__18913__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18915 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18916 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18917 = loc;
var G__18918 = (cljs.core.truth_(spec)?(function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18920_19233 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18921_19234 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18922_19235 = true;
var _STAR_print_fn_STAR__temp_val__18923_19236 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18922_19235);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18923_19236);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18896_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18896_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18921_19234);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18920_19233);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18915,G__18916,G__18917,G__18918) : format.call(null,G__18915,G__18916,G__18917,G__18918));

break;
case "macroexpansion":
var G__18927 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18928 = cause_type;
var G__18929 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18930 = loc;
var G__18931 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18927,G__18928,G__18929,G__18930,G__18931) : format.call(null,G__18927,G__18928,G__18929,G__18930,G__18931));

break;
case "compile-syntax-check":
var G__18933 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18934 = cause_type;
var G__18935 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18936 = loc;
var G__18937 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18933,G__18934,G__18935,G__18936,G__18937) : format.call(null,G__18933,G__18934,G__18935,G__18936,G__18937));

break;
case "compilation":
var G__18940 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18941 = cause_type;
var G__18942 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18943 = loc;
var G__18944 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18940,G__18941,G__18942,G__18943,G__18944) : format.call(null,G__18940,G__18941,G__18942,G__18943,G__18944));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18946 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18947 = symbol;
var G__18948 = loc;
var G__18949 = (function (){var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18950_19245 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18951_19246 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18952_19247 = true;
var _STAR_print_fn_STAR__temp_val__18953_19248 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18952_19247);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18953_19248);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18903_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18903_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18951_19246);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18950_19245);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18946,G__18947,G__18948,G__18949) : format.call(null,G__18946,G__18947,G__18948,G__18949));
} else {
var G__18963 = "Execution error%s at %s(%s).\n%s\n";
var G__18964 = cause_type;
var G__18965 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18966 = loc;
var G__18967 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18963,G__18964,G__18965,G__18966,G__18967) : format.call(null,G__18963,G__18964,G__18965,G__18966,G__18967));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18913__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
