﻿using Microsoft.EntityFrameworkCore;

namespace APIProjetoBlog.Entities
{
    public class User
    {
        
        public int Id { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
