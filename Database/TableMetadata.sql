USE [DFDB]
GO

/****** Object:  Table [dbo].[TableSchemaStore]    Script Date: 22-08-2015 13:39:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[TableSchemaStore](
	[col_id] [int] IDENTITY(1,1) NOT NULL,
	[table_name] [varchar](50) NULL,
	[col_name] [varchar](50) NULL,
	[col_datatype] [varchar](50) NULL,
	[col_size] [int] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

