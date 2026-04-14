import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class MidnightScene {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private mesh: THREE.Mesh | null = null;

    constructor(container: HTMLElement) {
        // Inicialización de componentes básicos
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        this.init(container);
        this.setupScrollAnimations();
    }

    private init(container: HTMLElement) {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(this.renderer.domElement);

        // Geometría de la Luna / Poliedro (Look Midnight)
        const geometry = new THREE.IcosahedronGeometry(1.5, 1);
        const material = new THREE.MeshStandardMaterial({ 
            color: 0x10b981, 
            wireframe: true,
            transparent: true,
            opacity: 0.6 
        });
        
        this.mesh = new THREE.Mesh(geometry, material);
        // Posición inicial: Centrada para el Hero
        this.mesh.position.set(0, 0, 0);
        this.scene.add(this.mesh);

        // Iluminación
        const light = new THREE.PointLight(0xffffff, 20);
        light.position.set(5, 5, 5);
        this.scene.add(light);
        this.scene.add(new THREE.AmbientLight(0xffffff, 0.5));

        this.camera.position.z = 4;

        // Resize handler
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });

        this.animate();
    }

    private setupScrollAnimations() {
        if (!this.mesh) return;

        // Esta es la parte que pediste: que la luna baje con el scroll
        gsap.to(this.mesh.position, {
            y: -5, // La luna baja en el espacio 3D
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.5
            }
        });

        gsap.to(this.mesh.rotation, {
            y: Math.PI * 2,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 2
            }
        });
    }

    private animate() {
        requestAnimationFrame(() => this.animate());
        if (this.mesh) {
            this.mesh.rotation.y += 0.005;
        }
        this.renderer.render(this.scene, this.camera);
    }
}