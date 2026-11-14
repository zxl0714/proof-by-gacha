Let \(\operatorname{cp}(G)\) denote the minimum number of complete subgraphs whose edge sets partition \(E(G)\), with \(K_2\)'s allowed. Determine whether there is an absolute constant \(C\) such that every chordal graph \(G\) on \(n\) vertices satisfies
\[
\operatorname{cp}(G)\le \frac{n^2}{6}+Cn.
\]

Use tools and pursue a complete proof or a genuine counterexample, not merely another estimate.

A positive resolution requires one constant \(C\), independent of \(n\) and \(G\). A negative resolution requires an infinite family of chordal graphs \(G_j\) for which
\[
\frac{\operatorname{cp}(G_j)-|V(G_j)|^2/6}{|V(G_j)|}
\]
is unbounded. A counterexample to a triangle-packing lemma is not automatically a counterexample to the original problem, because clique partitions may use \(K_4,K_5,\ldots\).

Relevant sources:

- [Official Erdős Problem #81](https://www.erdosproblems.com/81)
- [Erdős–Ordman–Zalcstein](https://doi.org/10.1017/S0963548300000808)
- [Chen–Erdős–Ordman on split graphs](https://ordman.net/MathResearch/CEOClique_Parts.pdf)
- [Recent chordal clique-partition project](https://github.com/jtraverso/erdos-81-chordal-clique-partitions)
- [Haxell–Rödl fractional packing theorem](https://doi.org/10.1007/s004930170003)
- [Yuster's packing generalization](https://arxiv.org/abs/math/0305350)
- [Blair–Peyton on clique trees](https://people.math.binghamton.edu/zaslav/Oldcourses/580.S13/blair-peyton.chordal-graphs-clique-trees.ornl1992.pdf)
