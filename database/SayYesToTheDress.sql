IF EXISTS(select * from sys.databases where name='SayYesToTheDressDB')
DROP DATABASE SayYesToTheDressDB

CREATE DATABASE SayYesToTheDressDB;
GO

USE SayYesToTheDressDB;
GO

CREATE TABLE [User] (
  [userID] [int] IDENTITY(1,1) NOT NULL,
  [username] [nvarchar](255) NOT NULL,
  CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
	(
		[userID] ASC
	)
)
GO

CREATE TABLE [Dress] (
  [dressID] [int] IDENTITY(1,1) NOT NULL,
  [userID] [int] NOT NULL,
  [skirtID] [int],
  [topID] [int],
  [veilID] [int],
  [shoesID] [int],
  [sleeveID] [int],
  [trainID] [int],
  CONSTRAINT [PK_Dress] PRIMARY KEY CLUSTERED 
	(
		[dressID] ASC
	)
)
GO

CREATE TABLE [Skirts] (
  [skirtID] [int] IDENTITY(1,1) NOT NULL,
  [skirtName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Skirt] PRIMARY KEY CLUSTERED 
	(
		[skirtID] ASC
	)
)
GO

CREATE TABLE [Tops] (
  [topID] [int] IDENTITY(1,1) NOT NULL,
  [topName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Top] PRIMARY KEY CLUSTERED 
	(
		[topID] ASC
	)
)
GO

CREATE TABLE [Veils] (
  [veilID] [int] IDENTITY(1,1) NOT NULL,
  [veilName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Veil] PRIMARY KEY CLUSTERED 
	(
		[veilID] ASC
	)
)
GO

CREATE TABLE [Shoes] (
  [shoeID] [int] IDENTITY(1,1) NOT NULL,
  [shoeName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Shoes] PRIMARY KEY CLUSTERED 
	(
		[shoeID] ASC
	)
)
GO

CREATE TABLE [Sleeves] (
  [sleeveID] [int] IDENTITY(1,1) NOT NULL,
  [sleeveName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Sleeves] PRIMARY KEY CLUSTERED 
	(
		[sleeveID] ASC
	)
)
GO

CREATE TABLE [Train] (
  [trainID] [int] IDENTITY(1,1) NOT NULL,
  [trainName] [varchar](255) NOT NULL,
  [colour] [varchar](255),
   CONSTRAINT [PK_Train] PRIMARY KEY CLUSTERED 
	(
		[trainID] ASC
	)
)
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([userID]) REFERENCES [User] ([userID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([skirtID]) REFERENCES [Skirts] ([skirtID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([topID]) REFERENCES [Tops] ([topID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([veilID]) REFERENCES [Veils] ([veilID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([shoesID]) REFERENCES [Shoes] ([shoeID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([sleeveID]) REFERENCES [Sleeves] ([sleeveID])
GO

ALTER TABLE [Dress] ADD FOREIGN KEY ([trainID]) REFERENCES [Train] ([trainID])
GO

--- ****************************************************************  DRESS ITEMS DATA  **********************************************************************
INSERT INTO [Skirts]
           ([skirtName])
VALUES	('ballgown'),
        ('line'),
        ('mermaid'),
        ('trumpet')
GO

INSERT INTO [Tops]
           ([topName])
VALUES	('asymmetric'),
        ('scoop'),
        ('sweetheart'),
        ('vneck')
GO

INSERT INTO [Veils]
           ([veilName])
VALUES	('long'),
		    ('short')
GO

INSERT INTO [Shoes]
           ([shoeName])
VALUES	('heels'),
		    ('pumps')
GO

INSERT INTO [Sleeves]
           ([sleeveName])
VALUES	('offSholder')
GO

INSERT INTO [Train]
           ([trainName])
VALUES	('sweep'),
		    ('court'),
        ('chapel')
GO

--- ****************************************************************  INSERT DUMMY USER **********************************************************************
INSERT INTO [User]
           ([username])
VALUES	('dummy')
GO
INSERT INTO [User]
           ([username])
VALUES	('test user')
GO
INSERT INTO [User]
           ([username])
VALUES	('dummy user')
GO

--- ****************************************************************  INSERT DUMMY USER FAVOURITE DRESS **********************************************************************
MERGE INTO [Dress] AS target
USING (
    SELECT
        (SELECT userID FROM [User] WHERE username = 'test user') AS userID,
        (SELECT topID FROM [Tops] WHERE topName = 'sweetheart') AS topID,
        (SELECT skirtID FROM [Skirts] WHERE skirtName = 'mermaid') AS skirtID,
		    (SELECT trainID FROM [Train] WHERE trainName = 'court') AS trainID
) AS source
ON 1=0
WHEN NOT MATCHED THEN
    INSERT (userID, topID, skirtID, trainID)
    VALUES (source.userID, source.topID, source.skirtID, source.trainID);
GO