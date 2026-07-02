export function NavProfile(name: string, date: string): string {
  
  return `
  <div class="NavProfile max-w-58 flex flex-row gap-3">
    <img src="???" alt="profile" class="w-14 h-14 rounded-full object-cover">
    <div class="flex flex-col gap-1">
      <p class="text-[#242424] text-lg font-extrabold">
      سلام ${name}
      </p>
      <small class="text-[#7D7D7F] text-sm font-semibold">
      ${date}
      </small>
    </div>
  </div>
  `
}