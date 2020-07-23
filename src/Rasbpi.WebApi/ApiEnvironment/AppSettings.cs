using System.Collections.Generic;

namespace Rasbpi.WebApi.ApiEnvironment
{
	public class AppSettings
	{
		public TokenSetting Token { get; set; }
		public IList<DatabaseProviderSetting> DatabaseProviders { get; set; }
	}

	public class TokenSetting
	{
		/// <summary>
		/// Secret key for JWT Token
		/// </summary>
		public string Secret { get; set; }

		/// <summary>
		/// Expiry time for the token in seconds
		/// </summary>
		public double TokenExpiryInSeconds { get; set; }
	}

	public class DatabaseSetting
	{
		public IList<DatabaseProviderSetting> Providers { get; set; }
	}

	public class DatabaseProviderSetting
	{
		/// <summary>
		/// Name of database in the app settings. Name must be unique
		/// </summary>
		public string Name { get; set; }

		/// <summary>
		/// Database provider type
		/// </summary>
		public DbProviderType ProviderType { get; set; }

		/// <summary>
		/// The connection string for the given database
		/// </summary>
		public string ConnectionString { get; set; }

		/// <summary>
		/// Creates Structify sample data if set to true
		/// </summary>
		public bool CreateSampleData { get; set; }

		/// <summary>
		/// Assembly name where the databsase provider setting resides
		/// <para></para>
		/// <remarks>
		/// REMARKS: This property is not being used yet 
		/// </remarks>
		/// </summary>
		public string Assembly { get; set; }

		/// <summary>
		/// The fully qualified type to activate
		/// <para></para>
		/// <remarks>
		/// REMARKS: This property is not being used yet 
		/// </remarks>
		/// </summary>
		public string FullQualifiedType { get; set; }
	}
}
