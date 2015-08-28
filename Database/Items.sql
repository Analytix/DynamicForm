USE [DFDB]
GO

/****** Object:  Table [dbo].[FORM_ITEMS]    Script Date: 12-08-2015 01:11:28 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[FORM_ITEMS](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[col_name] [varchar](50) NULL,
	[col_datatype] [varchar](50) NULL,
	[col_size] [int] NULL
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

