/* eslint-disable @next/next/no-img-element */
// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <div>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Page product
      </button>

      <form className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            className="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form>

      <input type="file" className="file:border file:border-solid ..." />

      <div className="selection:bg-fuchsia-300 selection:text-fuchsia-900">
        <p>
          So I started to walk into the water. I will not lie to you boys, I was
          terrified. But I pressed on, and as I made my way past the breakers a
          strange calm came over me. I do not know if it was divine intervention
          or the kinship of all living things but I tell you Jerry at that
          moment, I <em>was</em> a marine biologist.
        </p>
      </div>
      <form>
  <legend> Choose a theme: </legend>
  <label>
    <input type="radio" className="forced-colors:appearance-auto appearance-none" />
    <p className="forced-colors:block hidden">
      Cyan
    </p>
    <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200 ..."></div>
    <div className="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500 ..."></div>
  </label>
  
</form>

<div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
    </div>
  );
}
