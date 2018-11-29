namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class manual : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.patients",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        fname = c.String(nullable: false),
                        mname = c.String(nullable: false),
                        lname = c.String(nullable: false),
                        email = c.String(nullable: false),
                        DOB = c.DateTime(),
                        gender = c.Int(nullable: false),
                        lastCheck = c.DateTime(),
                        status = c.Int(nullable: false),
                        Active = c.Int(nullable: false),
                        CreatedBy = c.Int(),
                        creationDate = c.DateTime(),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.patients");
        }
    }
}
