import {Vector2} from "../interface/common";

/**
 * オフセットを加味したランダムを返却する
 * @param a - 二次元グラフの点1
 * @param b - 二次元グラフの点2
 * @returns aとbのdistanceを返却する
 */
export const distance = (a: Vector2, b: Vector2) => Math.abs(Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2)));

/**
 * オフセットを加味したランダムを返却する
 * @param max - 最大値
 * @param min - 最小値
 * @returns minからmaxの値のうち、ランダムな数を返却する
 */
export const offsetRandom = (max: number, min: number) => min + Math.random() * (max - min);
