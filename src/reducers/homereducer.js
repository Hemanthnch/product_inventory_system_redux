import { bindActionCreators } from "redux";
const homeReducer=function allProductsReducer(state=null,action){


var allProducts= [
        {
            productName: "Markers",
            productPrice: 2,
            productStock: 2,
            productDescription: "good product",
            productCategory: "stationary",
            productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7DA9vZ2UPtq6NO8onk3VRJawGT-9CP26LQ0i-__tdZbbIG7ZDHH_gZa-O57KTlH7QPE_yz1JViVN3KddDBe59K3athG99bIAkQQ&usqp=CAU&ec=45690273",
            id: 1
          },
          {
            productName: "One Plus 8",
            productImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAwICRERDRAQEREQEBARERIQEREQDxkPECIeLBouLSsmKikwNjkvMDM1NCkqMEY9NTs+QUJBLy5JT0g/TjlAQT4BDQ4OEhASHRUVHj4mHiY+Sj4+Pj4+Pj4+Pj4+Sj4+Pj4+Pj4+Pj4+Pj4+Pz4/Pj4+PkpEPj4+Pj5CPj4+PkI+Pv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABKEAABAwICAwwECQsDBQAAAAABAAIDBBEFIRIxQQYTIjI1UWFxdIGxsnORwdEUFRYzU2Sis+EjJDRCQ1JUcpSh8GKE0iVjg5Lx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREBAQEAAgMAAQMFAQAAAAAAAAECAxESITFBBBNxIlFhkeEy/9oADAMBAAIRAxEAPwD1VCEIBZuNVzoIBvQDppXb3EHcS9iS49AAJ6bW2rSWJug48fRT1Th9ke0oPKsW3UzPnlBfJMGvc3SllcAc7XDQQAOgKj8oJNW8xEdJcfasgnMnpKQqyGt8fO+gg+170fHzvoIPte9ZKEGqcdd/Dwfa96T48d9BB9r3rKSFEtX48d/Dwfa96BjrzYCCC5yHG96yirOEsD6ymYRcOniaQcxxkHRzUNW+oZBFBvs29Nlla38nEy5NgSTbZtN+a+y43c1iQz3mi76iT/4u6bGG74W2Dnvc9xttvr9i5/c7S4hHVTOqnP3osI4cwla51xwm55DXzawLZLC7vvr8LzM9MYbnMTGqKiH+6mCDgOK/uUn9XOu6SFZ3lq0xHAybncUdqFMz+WpkPiCo/k1i370H9S7/AIr0CyA1R+9pPhHn/wAmcW/fg/qXf8U5u5fFv3qc9BqHf8V6AGp4arzk1UXEcENzmL7G0Y/3MyX5O4x9U/qp/evQA1O0VeaqOo8+G57GrWBpBt/SZlDUsxygG/O3zeWcJ8lLUvkDRzlpNzbXmLc9l6QGp2ird1HUN3M4rJUxOZNbf4dAuc3JrmOHBeBsvYg9IPUtxc9gsDYqxzWgNb8HLAALZCXId2kV0KsoEIQgEIQgEIQgFi4/x29mqvFi2li4/wAdvZqrxYkHghSFKUhVkBCEIETXNvq/FKUhlLb2OsWNsknXfsqM6TJCx4LTexa4Frh7Vo4J+n0naIfOsqWQvkDnEkktzJuVq4HyjSdoi86Jj2k+0+KQpT7/ABSLi1/6refAkslslDVRY0BKGqQNTg1WkRaaGp4anBqeGrWRS0wNS2TylAWkiOzWtT9FPDU/RU9Cnh/KDvQSfeBbaxKDlJ/oZPvAttWZhCEIBCEIBCEIBYuP8dvZqrxYtpYmPOG+NFxpfBaohu22ky6QeCFCChWQEhSpEAVBIpiotIcIHaDbO2zX+CCuOOP5h4rZwT9PpO0Q+dZdS9jpyY26EZc3Rbcu/FamCfp9J2iHzomPabe3xSgJwb7fFODVxWf1VvL6MDU8NTg1ODVMhaaGpwanhqUNV5FeyBqcckpICpVNTo9JPFapupmeyS6vpLJLbpcdQ9qlpW6V3a8+MdaxnTOc9sbOFJIbfj3LoIIgxjWDOwtfb1qvHq7vf4i/Jnxk/vT2tTtFODUPOiCeYXW7G3pnUXKT/QyfeBbSwaCQfGRaSNJ0EpAvmfygv7FvKVQhCEAhCEAhCEAuex8H4Uw2NvgNYL2y48fcuhWLj54TezVXixTB4GUIKFKAkSpECFVpAddstV9islQOdawI4pJI9vs9SJVwOG3rHit3c+wuxGlsCbTxuyIH62tYwF3i2Q0i7Rvewut7ctyjB/MPFQPaGDL1+KeGojbkO/xUgauez21l9GhqcGpwasbFt0DaOvpoJI/yM0bnyT6VhHww0E5aiXAE3yvdWkRa2Q1DnALPxHFDDUUkLWB3wiV8RcTYi0Zdl6rKKoxCJsm9GSMzHNsWmN867Xv3qutzMWzm2p6qpt0k8Vo1rMmlIu4m7jrOzqSmUG79JribguBBbr1dykpXQNMcs80LA8gwiSRrNLpHP0WXLbd3p1STE7q/g1CYwZZB+UeMgdg5u/b3LXaFV39jb6T2Ns0vOk4Nyvr7udW4yCAQQQRcEG4612ccmZ1HJvVt7p4CrVr7AN58yrXgFmSv0nl3PqW2Z3WO71OlOkB+N48jYU1Tc2y47F0axcO/T3ehf5wtpKT4VCEKEhCEIBCEIBYO6CQb6xljc0lU+9uDx4/et5c9ui/Souw1vniUweFFCChSgJEFCBEsVG+eQRxxukeQSGsBJ6/xSK3hOJPpZ99Y1r7sdG5riWi34a1F/wAJU3U5ie5jmuY9pLXtcCHdS1Ny3KMH8w8VSxCrdUTyzvAD5HaRDb21f5mrO5yTRxGm/wBUrG67bUHucI4A7/FP0gFXbJZgHX4pjnkrG6kazNqd89tS52vjbNjEcUrQ+OTDKmN7TqIMzMlsPcGi7iAOclYOJVsj66KKmjhZMad8hqZ2kuEemMgBYm5sdYtr5lleT20mGXLVSw1dDQvO+VFLLMYJHm++R/Bnhrj0jinpAO1U4YicH03fBGh8ZlkqXueZxLtcTa+kHcxvfJbML3mpEdRBE6WJhkp6iFjizM2cM7lp5xc3GadTUuHyVZP5nJVtdpljXMdIHDaRfMjquFnd9tJjqdsx8b2GpoiS2StfC+C2XzmUpHNo6LnW6QtDCaeR8+IsENDIWVDoCyp0i9sIYN7baxGiW58xJKZU7pKICpnPwR89E57KYGoYZXjQFy3K4vcjK+o9StyCjrMQijdDS1TJKSSZtQAJCdGQDRvqIzPerTuT4pr3fqtg1BDPV4dHM6KriioK10Z4ToSBUNDRnxg0ZC4INgc8iu/haAA0ABoAAAFha2pYmH1VDJUCOGSlfUQxuhDIpGOla24u2wN7CwuNlgtsOsLnUF049xhfSOsksNEazrVJPldpElMXRJ1HJq+VQ0MwGJhlnXdTykEC7cpG+/xW+ueo+V2dlqPvGroVnW8+FQhChIQhCAQhCAXPbomn4RG63BFFWNvfaXxroVhbo+M3s1V5o1MHgxQgoUoIgoSIArZfgtNGIBNiAjlmghnbG2hlmI0hcC4NjzLGK6R9Q+HEMMqA1+9so6ASPbDvo0dHPYf7Z8yhKrh2G0b6GrklqdGSMxDSNNITGN8te1+FpaujrVDBeUaTb+cw56v11M2nvT4jM+NwLXwOic9rma5s8ukKDBOUaTtEPnQe3ZAXJsM9eQ1qu6qvlENP/Ucmf51JJYmk3eS7XZpPB1qOWUBedyb6tdvHmdQ1wz0nnTds2NCxcTdTz1UdPMzQfvZlp598MLr6nNa4WNxkSAcwdRstSQ245IvqaON19Hf3AqGpijlZvckUcjL33t7Q5vXnf161jN9Xu/8AW/h3GFVmaB1TTU9RLU6VBPIA877PG4arO153IF7m4yKnfC51DSWnoI4d8pjSvippHSaWkLBvCOZ1HLVe+1buHUEUItHHHECbkRsDArEGGUzJTMyngZK695GwtbJn0681tncrHWenM4ixnwLdALM0mzOIFhpW3hmYVjdCH/CJvg3H+Ja0s3rX86zVbova2d10hooTI+QxRGR7N6e8xtLy390nXbryT6SkhiLN6hhj0GujZvcbWWBNyB0E5kDbmrzc7jO5rCkhc6loLVOGxRb/AEpo3U9LKZL6QsG8M6xcHLVe+1ddUyfqjUNarQ4XSwSGaKmp46h97yRwNZJnrztfP+6mDR+sb9AXbnrM7rk13q9QxrC7ULqdlMBxjfoGQUjTzCw5k8Kbvv4iccn1k0zHfHDSG8BtNUBxvq/KNt6810CxqLlKT0MnnC2VCwQhCAQhCAQhCAWFuk4zOz1Xixbqwd0utnZqrxYkHg5QgpFZASJUiJBVpmK1TQ1jamdrWgNa1szg0C2rWqpTUFifEaiVhZJPNIw2JY+Vz26+YqTA+UaTtEPnVIq5gfKNJ2iHzoPZJi4lwGoX0nE2aM1SdUC+jFw3bZXDgjq/FSVrXvkIe60TSbNGW1V5JABotFh0LxeXXWq9bixPGAkN26TzmXHNSwN2lVmK7CsZ9a69RcjapxkoIyo6ie2Q1rfy8Z25urq9HTVOdgreHjIyvyaOfILEqqlkADpDwnHgjWVGMRkqNFjRoRDINBTGpi+e/v4i94budT5+a3ZK7SJDM+dylgG0qnSQaICuB+egwab9o1AdJ/y60xy65b3f9OfWM4nWVtp58hzqVtzqFhzkJkENs3HSd1Wap16GZevbltZtFylJ6GTzhbKx6PlKT0L/ADhbCuoEIQgEIQgEIQgFg7ptbOz1XixbywN0+uPs9V4sSDwgpEpSKyAkSlIUSRIlSFAhVzA+UaTtEPnVIq7gfKNJ2iHzoPXK13DI6/FUSrlYLyO6z4qFsV14XJP69fy9niszifwbG1XYWJYKZWw0N61pjit91nycn4iGQ6ITaWlc8l5yAzLjqCuxUelwpMm7BtVPdFWb3EII8nP1gcy3/ZmZ56+T8Ms7utTGftc1iFp6t2jcsbwWk6+tbuGUoYBksyhgDTznatqkaZchcRjJzhkT0D2rg1bya6ju5rMYmfxFqMOk4LDZoyc/2D37FpU0LWDRaLD1nrUcTAAAAABkAMgrcbV6vBxTM7v15PJvv1PhwQlARZdTFm0fKUnoX/eBbCx6TlKT0MnnC2EVCEIQCEIQCEIQC57dTrj7PVeLF0K53dV+z9BU+LFMHhZSJSkUoIgoQUSQpEqaUCFXcD5Ro+0Q+dUirmBco0naIfOg9jlivIT0nxU0VOrUcN8+e/irUdNzrhnD3q12Xl6zIqsiJyAVmOnazN2buZSlwbk3XzpgBJ6SurHFJ7rl3y2+oR77Bz3amjVs6lx9XKZJnyOzJOS6PGpgyPQHeubjjL32brPq61xfrN93xnx6H6PHjLqpqKAyP0Bk3W93s710MLA0BrRYAWACrUcAjYGjrJ29auxNuVh+n4/fZzcnlf8AC1A1WQFHG2ykXqSdR59vdKkQhWGbScpSehk84Wwsek5Sk9DJ5wthFQhCEAhCEAhCEAud3WfqegqfFi6Jc5ut/Z+hqfFimDwwpEpSKUESJUiJIkKUpCgQq5gXKNJ2iHzqmVcwPlGj7RD50H0DTlrY2k5nPLbrSPkJ6BzKKHiN7/FPspkk9q20J7RoguPckjbc29ajxCXRYQFXeuonGfKsDF5i+TRGZvqVvD6LQZc8Y6/co6Sm0pDI7M7FrMavN8fPXdehvfjmZiEMVqBiGxqzGyy6+Pj8XNrXZwCckQStmYKQlKkQZ1HylJ6F/nC2Fj0fKUnoX+cLYRUIQhAIQhAIQhALm9137L0NT4sXSLmt1/7L0NT4sUweGlIlKRSApClKRAiaU5NKBCruB8o0faIfOqRV3A+UaPtEPnQe+QcRvf4p6ZBxG9/ipWC5A9an8KX6kaNFl9pzWXWvuVpVL7BZDrueubmt66/u6uGe+09KxXo40ymgsASracePGI3rukDQEoSEoBWqh10JqW6ICS6QuTS5BSo+UpPQv84Wwsai5Sk9E/zhbKlUIQhAIQhAIQhALmd2P7L0NT4sXTLmN2X7H0NT4sUweHlIlKQqQiRKkKBEhWlh+EPqAwtkYwvkLGNc1x1FtzzZaYsNufReb5PvGgHTxBz3tY0A6QPAabjMXFn7B6rqBilXsC5Ro+0Q+dPdhDt8DGyxvDmB4ey7mfO6Fv73PeFNQURgxGgu9r9Ooi4uzNuX9x091iQ90p/m29/irEQ1nuVen+bb3+Kss4neVN+In1WqzkmUdNbhO17FZ3u5uU69lncy3utprqdQ+6a5yYXJAU7V6PBTgmApdJSinaSaXJpcoy9OxIXJheonSKN0ii06JQH/AKi/0Mn3gW0sTDT+fu9C/wA4W2rKhCEIBCEIBCEIBcxu01RehqfFi6dcvu24sPoqnxYg8PKCgoKsEKRKkQOEr2gta97WktcWteWtuNR17Nh2JBPIBoiSQNy4IkcG+7L3JhSFA5s8jQA2SRrRchrXua0f571cwR7jiNEC5xDaiENBcSANPV+AVAq5gXKNH2iHzoPoCn+bb3+Knacu9QU/zbe/xUoKX4T6eTZROch7lAXrO1pIl0kaSgMiN8UdpsT6SQvVcyJjpUtR0sGRROlUDpVC+VUukyJ3SqJ0qrulUTpVndLzLVwo3rb/APYf94FuLBwU/nf/AIH+cLeXTPkYX6VCEKUBCEIBCEIBctu21Q+jqB5fcupWJuqw99RSAxDSmidvjGXA0haxb6jcdICDwIpFfqsMlbPKwMc0h7uA8aDxnqI1pnxXP9GfWFYUkhKu/FdR9GfWE04VP9GfWEFMlNKvHCaj6M+sJpwmo+jPrCCkSrmBuAxGkJ1CoiJ/90pwmo+jPrCRmFVIIcIjdpB1jnUD3ygna9jgCC6N743i+YN/aM1ZK8cqcWxAVjaulkfTzvhbHO02cx1jrLTcHXzZbDrV8bssc/eoT1saD4qe/XQ9KkfkqzpV5w/dZjRv+hZ8wb71Cd0+MH+D9Tfesbm/hrNSPSTKk35eandHjH1T1N96PlJi/wBU+z71Xx0nzy9JdKo3TLzr5SYv9U+z70nyhxc/wn2feouNHll6C6VQulXBHH8W+qfZ96Q49i31X7PvVbxaWm8u7MiYXrhvj3Ffqv2feq1bWYnUjepJGtZIQwshABOernN+a9in7Oqfu5etbnpA+oa5pu00xcCOYyZH+xXRrntyOHyxROmnYY5JGRxsiPGbG29geYkucSNlwDmF0K6ZOnPfZUIQgEIQgEIQgEIQg5LdzxG/yFeaz6z1oQpFYppQhA6o4/cFrYb8wzv8UIQRYz82z+b2LOi1P6kIQMfq71IzYhCC3CrRQhAh1DrU1H+t3JEIhPNxHdSpN1hCESDtQhCBV1+4L549TvBCEQ7xCEKEhCEIBCEIP//Z",
            productPrice: 50000,
            productStock: 5,
            productDescription: "Good One",
            productCategory: "Electronics",
            "id": 2
          },
          {
            productName: "Pencils",
            productPrice: 60,
            productStock: 223,
            productDescription: "Good One",
            productCategory: "Stationary",
            productImage: "data:image/jpeg;base64,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  ",
            id: 3
          },
          {
            productName: "Washing Machine",
            productPrice: 30000,
            productStock: 5,
            productDescription: "Good One",
            productCategory: "Electronics",
            productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSchfD1wqJ3844AC4OOBDGcP1Z_0YkTg7zGgBM0Da2gExr6Cw0eBlEcu15Wkk9VRxqZfvgfhQMbAyVpFX6MhhR3D3-xWn8Y-2gphw&usqp=CAU&ec=45690273",
            id: 4
          }
    ]
    switch (action.type) {
      case "NEW_PRODUCT":
                                 
          console.log(state);
          console.log(action.payload);
          let length = state.length
          let newallproducts = [{ 
                                      id:length+1, 
                                      productName: action.payload.productName,
                                      productImage: action.payload.productImage,
                                      productPrice:action.payload.productPrice,
                                      productStock:action.payload.productStock,
                                      productDescription:action.payload.productDescription,
                                      productCategory:action.payload.productCategory
                                  }, ...state]
          return newallproducts
}
return allProducts
}
export default homeReducer;