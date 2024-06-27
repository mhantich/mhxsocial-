



function Mobile({ news }) {
    console.log(news)
  return (
    <div className="container mx-auto p-4">
      {news && news?.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row w-full md:w-48 h-46 md:h-64 mb-4 p-4 border rounded shadow-lg">
          {item.urlToImage && (
            <img src={item.urlToImage} alt={item.title} className="w-full md:w-1/3 object-cover rounded md:rounded-r-none" />
          )}
          <div className="p-4 w-full md:w-2/3 flex flex-col justify-between">
            <h5 className="text-gray-600">{item.author}</h5>
            <h6 className="text-gray-800 font-bold">{item.title}</h6>
            <p className="text-gray-700 mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mobile;

