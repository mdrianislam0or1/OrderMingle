import Particles from "tsparticles";
import { particlesConfig } from "./config";

export default function ParticlesBg() {
  return <Particles params={particlesConfig}></Particles>;
}
