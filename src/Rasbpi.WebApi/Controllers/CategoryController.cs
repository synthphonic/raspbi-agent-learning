using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Rasbpi.WebApi.Controllers
{
	[AllowAnonymous]
	[ApiController]
	//[Route("[controller]")]
	[Route("api/v{version:apiVersion}/[controller]")]
	[ApiVersion("1.0")]
	public class CategoryController : ControllerBase
	{
		private readonly ILogger<CategoryController> _logger;

		public CategoryController(ILogger<CategoryController> logger)
		{
			_logger = logger;
		}

		// GET: api/values
		[HttpGet]
		[MapToApiVersion("1.0")]
		public IEnumerable<string> Get()
		{
			return new string[] { "value1", "value2" };
		}

		// GET api/values/5
		[HttpGet("{id}")]
		[MapToApiVersion("1.0")]
		public string Get(int id)
		{
			return $"Hey thanks for hitting me.. I will return you Id {id} value";
		}

		// POST api/values
		[HttpPost]
		[MapToApiVersion("1.0")]
		public void Post([FromBody] string value)
		{
		}

		// PUT api/values/5
		[HttpPut("{id}")]
		[MapToApiVersion("1.0")]
		public void Put(int id, [FromBody] string value)
		{
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
		[MapToApiVersion("1.0")]
		public void Delete(int id)
		{
		}
	}
}