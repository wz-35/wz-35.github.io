var posts=["2023/05/11/hello-world/","2023/04/17/php/php数组的理解/","2023/05/20/小六壬学习/","2023/05/13/python/python中json的基本用法/","2023/06/14/web/联合注入/","2023/05/06/python/python中字符串的分割与拼接/","2023/05/09/python/python中os-listdir的排序问题/","2023/05/13/王尔德童话/夜莺与玫瑰/","2023/05/08/python/python中的转义字符/","2023/04/30/python/python中的切片操作/","2023/05/12/小六壬/小六壬速断表/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};