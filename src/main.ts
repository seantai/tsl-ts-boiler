import './style.css'

// With @webgpu/types installed and configured in tsconfig.json,
// TypeScript will now recognize WebGPU types without additional declarations

const checkWebGPU = () => {
  if (!navigator.gpu) {
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <h1>WebGPU is not supported</h1>
        <p>Your browser does not support WebGPU. Please use a browser that supports WebGPU.</p>
      </div>
    `
    return false
  }

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
      <h1>WebGPU is supported!</h1>
      <p>Your browser supports WebGPU. You're good to go!</p>
    </div>
  `
  return true
}

checkWebGPU()
