<template>
  <div
    class="flex items-center justify-between px-3 py-1 space-x-4 text-sm bg-gray-200 rounded-t-lg"
  >
<div class="flex items-center space-x-2">
  <span class="font-semibold">
    {{
      new Date().toLocaleTimeString("tr-TR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Istanbul",
      })
    }}
  </span>
</div>

    <div class="flex items-center space-x-1 text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-4 h-4"
        viewBox="0 0 640 512"
      >
        <path
          d="M96 384H64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm160-128h-32c-17.67 0-32 14.33-32 32v192c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V288c0-17.67-14.33-32-32-32zm160-128h-32c-17.67 0-32 14.33-32 32v320c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V160c0-17.67-14.33-32-32-32zM576 0h-32c-17.67 0-32 14.33-32 32v448c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
          fill="currentColor"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-7"
        viewBox="0 0 16 16"
      >
        <g fill="currentColor">
          <path d="M2 6h5v4H2V6z"></path>
          <path
            d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"
          ></path>
        </g>
      </svg>
    </div>
  </div>
</template>
