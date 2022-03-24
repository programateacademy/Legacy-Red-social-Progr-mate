import * as React from "react"

const Icon_cohorte = (props) => (
  <svg
    width={36}
    height={38}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        style={{
          fill: "#000",
          fillOpacity: 1,
        }}
        d="M12.008 5.3a3.363 3.363 0 0 0-1.785.51c-1.634 1.012-2.18 3.111-1.168 4.745a3.428 3.428 0 0 0 2.955 1.634c.155 0 .311 0 .467-.078v-.466c0-.39 0-.78.078-1.09-.156.077-.39.078-.545.078a1.89 1.89 0 0 1-1.865-1.865c0-1.012.854-1.868 1.865-1.868.778 0 1.478.466 1.789 1.166.31-.388.779-.776 1.168-1.087a3.498 3.498 0 0 0-2.96-1.678Zm12.058.044a3.334 3.334 0 0 0-2.955 1.71c.39.234.78.546 1.09 1.012.39-.933 1.477-1.4 2.488-1.011.934.389 1.401 1.479 1.012 2.49-.31.7-1.013 1.166-1.713 1.166-.155 0-.387 0-.543-.078.078.389.076.778.076 1.09v.466c.156 0 .312.079.467.079 1.945 0 3.5-1.558 3.5-3.424 0-1.945-1.555-3.5-3.422-3.5zM17.844 7.91c-2.1 0-3.733 1.712-3.733 3.735 0 2.1 1.71 3.81 3.81 3.81s3.735-1.71 3.735-3.81-1.712-3.735-3.812-3.735zm0 1.557a2.258 2.258 0 0 1 2.256 2.256c0 1.244-1.012 2.177-2.256 2.177a2.174 2.174 0 0 1-2.178-2.177c0-1.245 1.011-2.256 2.178-2.256zm6.523 3.572a7.86 7.86 0 0 0-.379.006h-.62a5.183 5.183 0 0 1-.7 1.633c.467-.078.854-.078 1.32-.078a6.471 6.471 0 0 1 4.123 1.244v5.601h1.557v-6.222l-.234-.235a7.689 7.689 0 0 0-5.067-1.949Zm-12.734.078a8.004 8.004 0 0 0-5.067 1.871l-.232.235v6.222h1.555v-5.601c1.244-.856 2.645-1.322 4.123-1.244.466 0 .931.078 1.32.156a5.182 5.182 0 0 1-.7-1.633h-.62a7.995 7.995 0 0 0-.38-.006zm6.008 3.658c-2.176.054-4.249 1.043-5.707 2.647l-.157.234v5.91c0 .7.545 1.323 1.323 1.323h9.955c.7 0 1.322-.623 1.322-1.323v-5.91h-.078l-.154-.234c-1.556-1.711-3.733-2.722-6.067-2.645a7.6 7.6 0 0 0-.437-.002zm.757 1.553c1.603.017 3.18.705 4.346 1.871v5.135h-9.412v-5.135c1.244-1.244 2.957-1.865 4.746-1.865.107-.005.214-.007.32-.006z"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={-2}
        y={0.377}
        width={40}
        height={40}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_197_731" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_197_731"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)

export default Icon_cohorte;