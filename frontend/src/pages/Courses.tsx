const Courses = () => {
  return (
    <main className="flex flex-col items-center ">
      {/* banner section */}
      <section className="w-full">
        <img
          src="https://images.unsplash.com/photo-1543875222-8a50d1903ffc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Courses banner"
          className="object-cover w-full aspect-4/1"
        />
      </section>

      {/* title */}
      <h1 className="text-6xl text-center m-6 font-bold">COURSES</h1>

      {/* filter component */}
      <div className="flex gap-1 border-2 border-grays-600 border-solid p-3">
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
        <div className="w-40 h-10 border-1 border-blue-400"></div>
      </div>
    </main>
  );
};

export default Courses;
