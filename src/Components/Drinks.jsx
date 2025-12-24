import Header from "./Header";

function Drinks(){
   return(
     <div className="min-h-screen bg-gray-100 text-black">

     
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mt-0 mb-6 text-yellow-600"> Drinks Menu </h1>


     
      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
       
        <div className="bg-white border border-yellow-200 rounded-xl p-4 flex flex-col gap-4 hover:shadow-lg transition">

         
          <div className="h-40 border-2 border-dashed border-yellow-300 rounded flex items-center justify-center text-yellow-400 font-semibold">
            Image
          </div>

         
          <h2 className="text-lg font-semibold text-gray-800"> Pancakes   </h2>
          <p className="text-yellow-600 font-medium"> $4.99 </p>

         
          <div className="flex items-center justify-between">

           
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 border border-yellow-400 rounded text-lg text-yellow-600 hover:bg-yellow-100">  -  </button>

              <span className="font-medium">1</span>

              <button className="w-8 h-8 border border-yellow-400 rounded text-lg text-yellow-600 hover:bg-yellow-100">  +  </button>
            </div>

           
            <button className="px-4 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700">  Add </button>

          </div>

        </div>


      </div>

    </div>
   )
};

export default Drinks;