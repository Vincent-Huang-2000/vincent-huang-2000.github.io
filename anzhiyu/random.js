var posts=["2023/06/a6f73cd985a5/","2022/07/6afaeaedc357/","2023/05/125ac999b258/","2021/02/8e9da1a3b478/","2020/12/626ab36213c9/","2021/03/f78536a6c402/","2023/05/c595d3a69a01/","2023/08/28cc012fe1f4/","2023/08/005cecf347d6/","2023/03/12093ec9a984/","2023/05/ea8bb341026a/","2021/04/7d5726201d15/","2024/06/c4f2eaabfc4c/","2021/04/1ac45388d378/","2024/05/c770a3b0d697/","2024/06/99eb3765b1cd/","2024/06/9718319218df/","2024/06/35033174c91d/","2023/05/3fc452b17087/","2023/08/61d9a5089dd3/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};