// index.js
// 获取应用实例
const app = getApp()

Page({ 
  data:{
    list_sm:[
      {
        picPath: "/images/pet1.png",
        age: 3,
        gender: "公",
        weight: 8,
        cut: true,
        vax: true,
        breed: "法牛"
      },
      {
        picPath: "/images/pet2.png",
        age: 3,
        gender: "公",
        weight: 5,
        cut: true,
        vax: true,
        breed: "未知"
        
      },
      {
        picPath: "/images/fish1.jpeg",
        age: 5,
        gender: "公",
        weight: 5,
        cut: true,
        vax: true,
        breed: "鱼"
      }
    ],
    list_big:[
      {
        picPath: "/images/dog1.jpeg",
        age: 3,
        gender: "公",
        weight: 8,
        cut: false,
        vax: true,
        breed: "法牛"
      },
      {
        picPath: "/images/dog2.jpeg",
        age: 3,
        gender: "公",
        weight: 8,
        cut: true,
        vax: false,
        breed: "边牧"
      }
    ]
  },
  
})
