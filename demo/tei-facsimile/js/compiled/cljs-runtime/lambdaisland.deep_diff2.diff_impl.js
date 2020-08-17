goog.provide('lambdaisland.deep_diff2.diff_impl');


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
lambdaisland.deep_diff2.diff_impl.Mismatch = (function (_,_PLUS_,__meta,__extmap,__hash){
this._ = _;
this._PLUS_ = _PLUS_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50252,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50267 = k50252;
var G__50267__$1 = (((G__50267 instanceof cljs.core.Keyword))?G__50267.fqn:null);
switch (G__50267__$1) {
case "-":
return self__._;

break;
case "+":
return self__._PLUS_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50252,else__4383__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50269){
var vec__50270 = p__50269;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50270,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50270,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#lambdaisland.deep-diff2.diff-impl.Mismatch{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-","-",-2112348439),self__._],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50251){
var self__ = this;
var G__50251__$1 = this;
return (new cljs.core.RecordIter((0),G__50251__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439),new cljs.core.Keyword(null,"+","+",1913524883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (277844286 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50253,other50254){
var self__ = this;
var this50253__$1 = this;
return (((!((other50254 == null)))) && ((this50253__$1.constructor === other50254.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50253__$1._,other50254._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50253__$1._PLUS_,other50254._PLUS_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50253__$1.__extmap,other50254.__extmap)));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-","-",-2112348439),null,new cljs.core.Keyword(null,"+","+",1913524883),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50251){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50290 = cljs.core.keyword_identical_QMARK_;
var expr__50291 = k__4388__auto__;
if(cljs.core.truth_((pred__50290.cljs$core$IFn$_invoke$arity$2 ? pred__50290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),expr__50291) : pred__50290.call(null,new cljs.core.Keyword(null,"-","-",-2112348439),expr__50291)))){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(G__50251,self__._PLUS_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50290.cljs$core$IFn$_invoke$arity$2 ? pred__50290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),expr__50291) : pred__50290.call(null,new cljs.core.Keyword(null,"+","+",1913524883),expr__50291)))){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,G__50251,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50251),null));
}
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"-","-",-2112348439),self__._,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50251){
var self__ = this;
var this__4379__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(self__._,self__._PLUS_,G__50251,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"+","+",-740910886,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Mismatch",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"lambdaisland.deep-diff2.diff-impl/Mismatch");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Mismatch.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Mismatch = (function lambdaisland$deep_diff2$diff_impl$__GT_Mismatch(_,_PLUS_){
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(_,_PLUS_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Mismatch, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Mismatch = (function lambdaisland$deep_diff2$diff_impl$map__GT_Mismatch(G__50262){
var extmap__4419__auto__ = (function (){var G__50308 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50262,new cljs.core.Keyword(null,"-","-",-2112348439),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"+","+",1913524883)], 0));
if(cljs.core.record_QMARK_(G__50262)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50308);
} else {
return G__50308;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Mismatch(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(G__50262),new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(G__50262),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
lambdaisland.deep_diff2.diff_impl.Deletion = (function (_,__meta,__extmap,__hash){
this._ = _;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50311,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50319 = k50311;
var G__50319__$1 = (((G__50319 instanceof cljs.core.Keyword))?G__50319.fqn:null);
switch (G__50319__$1) {
case "-":
return self__._;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50311,else__4383__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50323){
var vec__50324 = p__50323;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50324,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50324,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#lambdaisland.deep-diff2.diff-impl.Deletion{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"-","-",-2112348439),self__._],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50310){
var self__ = this;
var G__50310__$1 = this;
return (new cljs.core.RecordIter((0),G__50310__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-","-",-2112348439)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-213818521 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50312,other50313){
var self__ = this;
var this50312__$1 = this;
return (((!((other50313 == null)))) && ((this50312__$1.constructor === other50313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50312__$1._,other50313._)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50312__$1.__extmap,other50313.__extmap)));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"-","-",-2112348439),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50310){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50387 = cljs.core.keyword_identical_QMARK_;
var expr__50388 = k__4388__auto__;
if(cljs.core.truth_((pred__50387.cljs$core$IFn$_invoke$arity$2 ? pred__50387.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"-","-",-2112348439),expr__50388) : pred__50387.call(null,new cljs.core.Keyword(null,"-","-",-2112348439),expr__50388)))){
return (new lambdaisland.deep_diff2.diff_impl.Deletion(G__50310,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50310),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"-","-",-2112348439),self__._,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50310){
var self__ = this;
var this__4379__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Deletion(self__._,G__50310,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-","-",-471816912,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Deletion",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"lambdaisland.deep-diff2.diff-impl/Deletion");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Deletion.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Deletion = (function lambdaisland$deep_diff2$diff_impl$__GT_Deletion(_){
return (new lambdaisland.deep_diff2.diff_impl.Deletion(_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Deletion, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Deletion = (function lambdaisland$deep_diff2$diff_impl$map__GT_Deletion(G__50317){
var extmap__4419__auto__ = (function (){var G__50430 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50317,new cljs.core.Keyword(null,"-","-",-2112348439));
if(cljs.core.record_QMARK_(G__50317)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50430);
} else {
return G__50430;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Deletion(new cljs.core.Keyword(null,"-","-",-2112348439).cljs$core$IFn$_invoke$arity$1(G__50317),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
lambdaisland.deep_diff2.diff_impl.Insertion = (function (_PLUS_,__meta,__extmap,__hash){
this._PLUS_ = _PLUS_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50443,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50464 = k50443;
var G__50464__$1 = (((G__50464 instanceof cljs.core.Keyword))?G__50464.fqn:null);
switch (G__50464__$1) {
case "+":
return self__._PLUS_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50443,else__4383__auto__);

}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50469){
var vec__50473 = p__50469;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50473,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#lambdaisland.deep-diff2.diff-impl.Insertion{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_],null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50442){
var self__ = this;
var G__50442__$1 = this;
return (new cljs.core.RecordIter((0),G__50442__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"+","+",1913524883)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (598484861 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50444,other50445){
var self__ = this;
var this50444__$1 = this;
return (((!((other50445 == null)))) && ((this50444__$1.constructor === other50445.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50444__$1._PLUS_,other50445._PLUS_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50444__$1.__extmap,other50445.__extmap)));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"+","+",1913524883),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50442){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50530 = cljs.core.keyword_identical_QMARK_;
var expr__50531 = k__4388__auto__;
if(cljs.core.truth_((pred__50530.cljs$core$IFn$_invoke$arity$2 ? pred__50530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"+","+",1913524883),expr__50531) : pred__50530.call(null,new cljs.core.Keyword(null,"+","+",1913524883),expr__50531)))){
return (new lambdaisland.deep_diff2.diff_impl.Insertion(G__50442,self__.__meta,self__.__extmap,null));
} else {
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50442),null));
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"+","+",1913524883),self__._PLUS_,null))], null),self__.__extmap));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50442){
var self__ = this;
var this__4379__auto____$1 = this;
return (new lambdaisland.deep_diff2.diff_impl.Insertion(self__._PLUS_,G__50442,self__.__extmap,self__.__hash));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"+","+",-740910886,null)], null);
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$type = true);

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"lambdaisland.deep-diff2.diff-impl/Insertion",null,(1),null));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"lambdaisland.deep-diff2.diff-impl/Insertion");
}));

/**
 * Positional factory function for lambdaisland.deep-diff2.diff-impl/Insertion.
 */
lambdaisland.deep_diff2.diff_impl.__GT_Insertion = (function lambdaisland$deep_diff2$diff_impl$__GT_Insertion(_PLUS_){
return (new lambdaisland.deep_diff2.diff_impl.Insertion(_PLUS_,null,null,null));
});

/**
 * Factory function for lambdaisland.deep-diff2.diff-impl/Insertion, taking a map of keywords to field values.
 */
lambdaisland.deep_diff2.diff_impl.map__GT_Insertion = (function lambdaisland$deep_diff2$diff_impl$map__GT_Insertion(G__50451){
var extmap__4419__auto__ = (function (){var G__50555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50451,new cljs.core.Keyword(null,"+","+",1913524883));
if(cljs.core.record_QMARK_(G__50451)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50555);
} else {
return G__50555;
}
})();
return (new lambdaisland.deep_diff2.diff_impl.Insertion(new cljs.core.Keyword(null,"+","+",1913524883).cljs$core$IFn$_invoke$arity$1(G__50451),null,cljs.core.not_empty(extmap__4419__auto__),null));
});


/**
 * @interface
 */
lambdaisland.deep_diff2.diff_impl.Diff = function(){};

var lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$dyn_51120 = (function (x,y){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (lambdaisland.deep_diff2.diff_impl._diff_similar[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4429__auto__.call(null,x,y));
} else {
var m__4426__auto__ = (lambdaisland.deep_diff2.diff_impl._diff_similar["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4426__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("Diff.-diff-similar",x);
}
}
});
lambdaisland.deep_diff2.diff_impl._diff_similar = (function lambdaisland$deep_diff2$diff_impl$_diff_similar(x,y){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2(x,y);
} else {
return lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$dyn_51120(x,y);
}
});


/**
 * @interface
 */
lambdaisland.deep_diff2.diff_impl.Undiff = function(){};

var lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$dyn_51122 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (lambdaisland.deep_diff2.diff_impl.left_undiff[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (lambdaisland.deep_diff2.diff_impl.left_undiff["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("Undiff.left-undiff",x);
}
}
});
lambdaisland.deep_diff2.diff_impl.left_undiff = (function lambdaisland$deep_diff2$diff_impl$left_undiff(x){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1(x);
} else {
return lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$dyn_51122(x);
}
});

var lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$dyn_51127 = (function (x){
var x__4428__auto__ = (((x == null))?null:x);
var m__4429__auto__ = (lambdaisland.deep_diff2.diff_impl.right_undiff[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4429__auto__.call(null,x));
} else {
var m__4426__auto__ = (lambdaisland.deep_diff2.diff_impl.right_undiff["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4426__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("Undiff.right-undiff",x);
}
}
});
lambdaisland.deep_diff2.diff_impl.right_undiff = (function lambdaisland$deep_diff2$diff_impl$right_undiff(x){
if((((!((x == null)))) && ((!((x.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 == null)))))){
return x.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1(x);
} else {
return lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$dyn_51127(x);
}
});

lambdaisland.deep_diff2.diff_impl.shift_insertions = (function lambdaisland$deep_diff2$diff_impl$shift_insertions(ins){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,idx){
var offset = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(res)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(res,(idx + offset),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,idx));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(ins)));
});
/**
 * Given a set of deletion indexes and a map of insertion index to value sequence,
 *   match up deletions and insertions into replacements, returning a map of
 *   replacements, a set of deletions, and a map of insertions.
 */
lambdaisland.deep_diff2.diff_impl.replacements = (function lambdaisland$deep_diff2$diff_impl$replacements(p__50589){
var vec__50590 = p__50589;
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50590,(0),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50590,(1),null);
var rep = cljs.core.PersistentArrayMap.EMPTY;
var del__$1 = del;
var del_rest = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(del__$1);
var ins__$1 = ins;
while(true){
var temp__5733__auto__ = cljs.core.first(del_rest);
if(cljs.core.truth_(temp__5733__auto__)){
var d = temp__5733__auto__;
var temp__5733__auto____$1 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,d));
if(temp__5733__auto____$1){
var i = temp__5733__auto____$1;
var G__51139 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rep,d,cljs.core.first(i));
var G__51140 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(del__$1,d);
var G__51141 = cljs.core.next(del_rest);
var G__51142 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(ins__$1,d,cljs.core.next);
rep = G__51139;
del__$1 = G__51140;
del_rest = G__51141;
ins__$1 = G__51142;
continue;
} else {
var temp__5733__auto____$2 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,(d - (1))));
if(temp__5733__auto____$2){
var i = temp__5733__auto____$2;
var G__51147 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rep,d,cljs.core.first(i));
var G__51148 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(del__$1,d);
var G__51149 = cljs.core.next(del_rest);
var G__51150 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ins__$1,(d - (1))),d,cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.next(i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins__$1,d))));
rep = G__51147;
del__$1 = G__51148;
del_rest = G__51149;
ins__$1 = G__51150;
continue;
} else {
var G__51160 = rep;
var G__51161 = del__$1;
var G__51162 = cljs.core.next(del_rest);
var G__51163 = ins__$1;
rep = G__51160;
del__$1 = G__51161;
del_rest = G__51162;
ins__$1 = G__51163;
continue;
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rep,del__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.val)),lambdaisland.deep_diff2.diff_impl.shift_insertions(ins__$1))], null);
}
break;
}
});
/**
 * Wrapper around clj-diff that returns deletions and insertions as a set and map
 *   respectively.
 */
lambdaisland.deep_diff2.diff_impl.del_PLUS_ins = (function lambdaisland$deep_diff2$diff_impl$del_PLUS_ins(exp,act){
var map__50605 = clj_diff.core.diff(exp,act);
var map__50605__$1 = (((((!((map__50605 == null))))?(((((map__50605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50605):map__50605);
var del = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
var ins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50605__$1,new cljs.core.Keyword(null,"+","+",1913524883));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,del),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__50615){
var vec__50616 = p__50615;
var seq__50617 = cljs.core.seq(vec__50616);
var first__50618 = cljs.core.first(seq__50617);
var seq__50617__$1 = cljs.core.next(seq__50617);
var k = first__50618;
var vs = seq__50617__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(vs)], null);
})),ins)], null);
});
lambdaisland.deep_diff2.diff_impl.diff_seq_replacements = (function lambdaisland$deep_diff2$diff_impl$diff_seq_replacements(replacements,s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,v){
if(cljs.core.contains_QMARK_(replacements,idx)){
var G__50627 = v;
var G__50628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(replacements,idx);
return (lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2(G__50627,G__50628) : lambdaisland.deep_diff2.diff_impl.diff.call(null,G__50627,G__50628));
} else {
return v;
}
}),s);
});
lambdaisland.deep_diff2.diff_impl.diff_seq_deletions = (function lambdaisland$deep_diff2$diff_impl$diff_seq_deletions(del,s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,idx){
if(cljs.core.contains_QMARK_(del,idx)){
return lambdaisland.deep_diff2.diff_impl.__GT_Deletion(v);
} else {
return v;
}
}),s,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
lambdaisland.deep_diff2.diff_impl.diff_seq_insertions = (function lambdaisland$deep_diff2$diff_impl$diff_seq_insertions(ins,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,p__50643){
var vec__50644 = p__50643;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50644,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50644,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.take.cljs$core$IFn$_invoke$arity$2((idx + (1)),res),cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),res)], 0));
}),s,ins);
});
lambdaisland.deep_diff2.diff_impl.diff_seq = (function lambdaisland$deep_diff2$diff_impl$diff_seq(exp,act){
var vec__50653 = lambdaisland.deep_diff2.diff_impl.replacements(lambdaisland.deep_diff2.diff_impl.del_PLUS_ins(exp,act));
var rep = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653,(0),null);
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653,(1),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50653,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,lambdaisland.deep_diff2.diff_impl.diff_seq_insertions(ins,lambdaisland.deep_diff2.diff_impl.diff_seq_deletions(del,lambdaisland.deep_diff2.diff_impl.diff_seq_replacements(rep,exp))));
});
lambdaisland.deep_diff2.diff_impl.diff_map = (function lambdaisland$deep_diff2$diff_impl$diff_map(exp,act){
return cljs.core.first((function (){var exp_ks = cljs.core.keys(exp);
var act_ks = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(act)),exp_ks),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(exp_ks),cljs.core.keys(act)));
var vec__50672 = lambdaisland.deep_diff2.diff_impl.del_PLUS_ins(exp_ks,act_ks);
var del = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(0),null);
var ins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50672,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50682,k){
var vec__50683 = p__50682;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50683,(0),null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50683,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__50686 = m;
var G__50686__$1 = ((cljs.core.contains_QMARK_(del,idx))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50686,lambdaisland.deep_diff2.diff_impl.__GT_Deletion(k),(exp.cljs$core$IFn$_invoke$arity$1 ? exp.cljs$core$IFn$_invoke$arity$1(k) : exp.call(null,k))):G__50686);
var G__50686__$2 = (((!(cljs.core.contains_QMARK_(del,idx))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50686__$1,k,(function (){var G__50687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(exp,k);
var G__50688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(act,k);
return (lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2 ? lambdaisland.deep_diff2.diff_impl.diff.cljs$core$IFn$_invoke$arity$2(G__50687,G__50688) : lambdaisland.deep_diff2.diff_impl.diff.call(null,G__50687,G__50688));
})()):G__50686__$1);
if(cljs.core.contains_QMARK_(ins,idx)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(G__50686__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,act))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,idx));
} else {
return G__50686__$2;
}
})(),(idx + (1))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.contains_QMARK_(ins,(-1)))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.__GT_Insertion,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,act))),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ins,(-1))):cljs.core.PersistentArrayMap.EMPTY),(0)], null),exp_ks);
})());
});
lambdaisland.deep_diff2.diff_impl.primitive_QMARK_ = (function lambdaisland$deep_diff2$diff_impl$primitive_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || (cljs.core.boolean_QMARK_(x)) || (cljs.core.inst_QMARK_(x)) || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
lambdaisland.deep_diff2.diff_impl.diff_atom = (function lambdaisland$deep_diff2$diff_impl$diff_atom(exp,act){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exp,act)){
return exp;
} else {
return lambdaisland.deep_diff2.diff_impl.__GT_Mismatch(exp,act);
}
});
lambdaisland.deep_diff2.diff_impl.diff_similar = (function lambdaisland$deep_diff2$diff_impl$diff_similar(x,y){
if(lambdaisland.deep_diff2.diff_impl.primitive_QMARK_(x)){
return lambdaisland.deep_diff2.diff_impl.diff_atom(x,y);
} else {
return lambdaisland.deep_diff2.diff_impl._diff_similar(x,y);
}
});
lambdaisland.deep_diff2.diff_impl.diffable_QMARK_ = (function lambdaisland$deep_diff2$diff_impl$diffable_QMARK_(exp){
if((!((exp == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === exp.lambdaisland$deep_diff2$diff_impl$Diff$)))){
return true;
} else {
if((!exp.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(lambdaisland.deep_diff2.diff_impl.Diff,exp);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(lambdaisland.deep_diff2.diff_impl.Diff,exp);
}
});
lambdaisland.deep_diff2.diff_impl.diff = (function lambdaisland$deep_diff2$diff_impl$diff(exp,act){
if((exp == null)){
return lambdaisland.deep_diff2.diff_impl.diff_atom(exp,act);
} else {
if(((lambdaisland.deep_diff2.diff_impl.diffable_QMARK_(exp)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(exp),clojure.data.equality_partition(act))))){
return lambdaisland.deep_diff2.diff_impl.diff_similar(exp,act);
} else {
if(cljs.core.array_QMARK_(exp)){
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp,act);
} else {
if(cljs.core.record_QMARK_(exp)){
return lambdaisland.deep_diff2.diff_impl.diff_map(exp,act);
} else {
return lambdaisland.deep_diff2.diff_impl.diff_atom(exp,act);

}
}
}
}
});
(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
var exp_seq = cljs.core.seq(exp__$1);
var act_seq = cljs.core.seq(act);
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.diff_seq(exp_seq,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(act,exp_seq),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(exp__$1,act_seq))));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_seq(exp__$1,act);
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_map(exp__$1,act);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Diff$_diff_similar$arity$2 = (function (exp,act){
var exp__$1 = this;
return lambdaisland.deep_diff2.diff_impl.diff_map(exp__$1,act);
}));
goog.object.set(lambdaisland.deep_diff2.diff_impl.Undiff,"null",true);

goog.object.set(lambdaisland.deep_diff2.diff_impl.left_undiff,"null",(function (m){
return m;
}));

goog.object.set(lambdaisland.deep_diff2.diff_impl.right_undiff,"null",(function (m){
return m;
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__50773_SHARP_){
return (cljs.core.key(p1__50773_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentHashMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__50775_SHARP_){
return (cljs.core.key(p1__50775_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__50771_SHARP_){
return (cljs.core.key(p1__50771_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.PersistentArrayMap.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p1__50772_SHARP_){
return (cljs.core.key(p1__50772_SHARP_) instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.key),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.val)))),m__$1);
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50761_SHARP_){
return (p1__50761_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.EmptyList.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50762_SHARP_){
return (p1__50762_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
}));

(lambdaisland.deep_diff2.diff_impl.Mismatch.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"+","+",1913524883));
}));

goog.object.set(lambdaisland.deep_diff2.diff_impl.Undiff,"_",true);

goog.object.set(lambdaisland.deep_diff2.diff_impl.left_undiff,"_",(function (m){
return m;
}));

goog.object.set(lambdaisland.deep_diff2.diff_impl.right_undiff,"_",(function (m){
return m;
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50764_SHARP_){
return (p1__50764_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.PersistentVector.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50767_SHARP_){
return (p1__50767_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50758_SHARP_){
return (p1__50758_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.List.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50760_SHARP_){
return (p1__50760_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Insertion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"+","+",1913524883));
}));

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.left_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.PersistentHashSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.right_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.left_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50768_SHARP_){
return (p1__50768_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Insertion);
}),s__$1));
}));

(cljs.core.KeySeq.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(lambdaisland.deep_diff2.diff_impl.right_undiff,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50769_SHARP_){
return (p1__50769_SHARP_ instanceof lambdaisland.deep_diff2.diff_impl.Deletion);
}),s__$1));
}));

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.left_undiff(cljs.core.seq(s__$1)));
}));

(cljs.core.PersistentTreeSet.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (s){
var s__$1 = this;
return cljs.core.set(lambdaisland.deep_diff2.diff_impl.right_undiff(cljs.core.seq(s__$1)));
}));

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(lambdaisland.deep_diff2.diff_impl.Deletion.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,new cljs.core.Keyword(null,"-","-",-2112348439));
}));

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$left_undiff$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

(cljs.core.UUID.prototype.lambdaisland$deep_diff2$diff_impl$Undiff$right_undiff$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
}));

//# sourceMappingURL=lambdaisland.deep_diff2.diff_impl.js.map
