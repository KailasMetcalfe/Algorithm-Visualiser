## Tree Maths derivation

Note that $L$ represents the length of the input array (ie total number of nodes in the tree).<br>

We ask how many leaf nodes are on the smallest perfect binary tree which contains our original tree. We set up two inequalities to solve for this. <br>
In particular, we want the smallest $n \in$ $\mathbb{Z}^+$ such that,
$$ L < 2^n$$
This comes from the fact that the smallest encompassing perfect binary tree would have exactly $2^n$ leaf nodes. <br>
Rearranging gives $$\log_2(L) < n$$
However we also have the condition that since we want the smallest $n$, that
$$ L \ge 2^{n-1} \implies$$
$$ \log_2(L) \ge n-1 \implies $$
$$ \log_2(L) + 1\ge n $$
Hence we have the following inequality,
$$ \log_2(L) < n \le \log_2(L) + 1$$

We require $n \in$ $\mathbb{Z}^+$ thus, $n = \left\lfloor \log_2(L) + 1\right\rfloor$ works.
<br>

## Template Contents

Base React template with ESLint, Prettier, vitest (and other testing libraries)

## How to use

Run 'npm install' and you are good to go!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
