import {Component, inject, OnInit} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Router} from "@angular/router";


@Component({
  selector: 'app-animation1',
  standalone: true,
  imports: [],
  templateUrl: './animation1.component.html',
  styleUrl: './animation1.component.css'
})
export class Animation1Component implements OnInit {

  router = inject(Router);



  ngOnInit(): void {
    this.createThreeJsBox();
    setTimeout(()=>{
      this.router.navigate(['cart'])
    },2000);
  }

  createThreeJsBox(): void {

    // scene setup ----------------------------------------------------------------------

    const canvas = document.getElementById('canvas-box');
    const scene = new THREE.Scene();

    if (!canvas) {return;}
    const renderer = new THREE.WebGLRenderer({canvas: canvas,});

    renderer.setClearColor(0xFFFFFF, 1); //0xFFFFFF
    renderer.setSize(window.innerWidth, window.innerHeight);
    const canvasSizes = {
      width: window.innerWidth/2,
      height: window.innerHeight/2,
    };

    //light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    //camera
    const camera = new THREE.PerspectiveCamera(
      75,canvasSizes.width/canvasSizes.height, 0.01, 100
    );
    camera.position.z = 30;
    scene.add(camera);

    // responsive
    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth;
      canvasSizes.height = window.innerHeight;

      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera);
    });


    // Geometry ---------------------------
    const geometry = new THREE.TorusGeometry(3,2,7,40);
    const materialT = new THREE.MeshStandardMaterial({color: 0x0000ff });
    const torus = new THREE.Mesh(geometry, materialT);
    scene.add(torus);


    // Animate ------------------------------

    const clock = new THREE.Clock();

    const animateGeometry = () => {
      const elapsedTime = clock.getElapsedTime();

      torus.rotation.x = -elapsedTime;
      torus.rotation.y = -elapsedTime;
      torus.rotation.z = -elapsedTime;

      renderer.render(scene, camera);

      window.requestAnimationFrame(animateGeometry);
    };

    //const loader = new GLTFLoader();

    animateGeometry();
  }






}
