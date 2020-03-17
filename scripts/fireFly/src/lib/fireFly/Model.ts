import {Vector3, Vector2} from "../../interface/common";
import {distance, offsetRandom} from "../../util/math";

// 点灯サイクル
const maxLightCycle = 100;
const minLightCycle = 50;

// 生存期間
const maxLifeCycle = 1000;
const minLifeCycle = 500;

class FireFly {
  color: Vector3;
  position: Vector2;
  lightCycle: number;
  lifeCycle: number;

  public constructor(position: Vector2, color: Vector3) {
    this.color = color;
    this.position = position;
    this.lightCycle = offsetRandom(maxLightCycle, minLightCycle);
    this.lifeCycle = offsetRandom(maxLifeCycle, minLifeCycle);
  }

  // 対象との距離を求める関数
  public distance(targetPosition: Vector2) {
    distance(this.position, targetPosition);
  }

  public syncCycle(targetCycle: number) {
  }
}

export default FireFly;
