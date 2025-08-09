import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Phone,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
} from "lucide-react";

const Home: React.FC = () => {
  const services = [
    {
      id: "pain-management",
      title: "Pain Management",
      image: "https://media.istockphoto.com/id/1405986129/photo/doctor-physiotherapist-doing-healing-treatment-on-mans-back.jpg?s=612x612&w=0&k=20&c=B4zWk1T1FleknnsNF8hd8r6kv2OqqsGsqn1NGNDWeeI=",
      description:
        "Comprehensive pain relief solutions for chronic and acute conditions using evidence-based techniques.",
    },
    {
      id: "sports-rehabilitation",
      title: "Sports Rehabilitation",
      image: "https://elements-resized.envatousercontent.com/elements-video-cover-images/f25e2ae9-22b9-4fd9-ba75-3e8fd18795f6/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=4df7fdc8e3bbfb62358abc157bf79da8ff6390ce8d690851c516f3f063803848",
      description:
        "Specialized treatment for sports injuries and performance enhancement for athletes of all levels.",
    },
    {
      id: "womens-health",
      title: "Women's Health",
      image:"https://media.istockphoto.com/id/1058368650/photo/performing-a-thorough-checkup-on-her-patient.jpg?s=612x612&w=0&k=20&c=7Q7XcsIu9tnXxqL_eHZiar9TIEbQkqYIR-_RI_E5AlQ=",
      // image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhMVFRUVFRUVFRcYFhUVFRcVFRUWFhUVFRUYHSggGBomHhUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHyArLS0rLS0rLSstLS0rLS0tLS0tLS0tKy0tKy0tLS0tLSstLi0tLSstLS0tLS0rLS0tLf/AABEIALMBGQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAQMEBQYHAAj/xAA+EAABAwEFBQUEBgsBAQAAAAABAAIRAwQFEiExBkFRYXETIoGRsQcyocEUI1Jy0fAVJDM0QmJzgpKy4fEW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJBEBAAICAgICAgMBAAAAAAAAAAECAxEhMQQSMkEUURMicWH/2gAMAwEAAhEDEQA/AOlNCcAQtCMKyEAjCQIgkHkQCQIkB5EF5KgPJUAeOKUOCAJeXgV5BvLyUpEB5KmrTaGU2l9R7WNGrnENaOpKrDtTYMWD6XZ8XDtWeswgLdNmmZ1TjSCJGYOh3IK1TCCeAlMG+ydxSGk7iFAsF9tqkAAjFMTy4q1BQJjRg0ncQlptO9G5LCCehDCchCkAQhIThQkJhzvaIfrD+o9FHukfXM6p/aP94qdR6Jm5j9czr8k2bdwud7QD9crf2+i6MueX4P1yt/b/AKqoEpNhjDqvWz3TnuTVlbkvWhvdPRaIWPsr/e6n9I/7NXVZXKvZg0/S3/0zP+TV1MrC3bWvRQ5Kmg7RKlpW1E1OAIGpxqAIJQkCIIBQiSBKEAoRJAlQAhg4JRTHBRLyc8MPZ5POnzTF2VqhJDtIyPPUoVrjaz7McF7AEQSEISTCAs7txtUy76IfGKq+W0mbiRq538okdZWjIXAfane5r2+o3+Gj9SwfdzeepcT5BEnCivu/bRa3469RzzJgaMbyYzRqr+zdwKcshEiVu7isTHjINy3fPks7W02pj9lVsNftssdVuEPdQLgKtMyW4Zzc0fwuAzyXearsQEZh0EHiDmuW1GtZkBn8Frdh7xc7FRcZDRiZyEgFvTMR4qaZdzqVZMHrX2iVlYxL392IzB6FWr3gCdyboUgHExrPqnXiegC3YTO0SzW9j3YZE6gcuKmBV12gHEMMHcfNWFNBSNIQlKSUiCkIRlCQmHONpf3ip1Hoo1yft6fX5KRtJ+8VOo9FAsNrbTqscYHXLdxTQ6QVyy/b5ottlcOfEODd+oEFUt47dWqjWqmnUyLjEy5oAkCGzA68lh7RbHPcXEyXEkniTql7fpfr+2/u3aj6x4cPqxJB4AcVaVNoKDqZc18iJjeuUPfulLTtLtEReS9Id69llqY60VMLgZp5R96fBdODsl8z7B7T1rNaaQpwWvc1tRpEy2e8ZGYgSZ5L6MoWgOENIOe4g6o7E8JTQfijwoahiAgxFBKhqcam2p1qShBE1CiagCCVIlQBLy8vBBo9oYYceDTHVRrtYcJnOHCPIT6qfU0PRBZ2RPX5BB740W0VCBkJPD5qNYbU4mHNMa4p3ndCkVmkNcd8FMXYCWuDuXoEx9J0r5o2zoltvtLIM/SKkCDJxPJbA5ghfSzW6Lj3thut1C2UrcGzTqYWvIGlRgIk8y2CObCpkR256ywVGOh7HN6gro2y1k+qDs5UKzWYNHa900qggAQBOUQN+W/irS5rSKIgnIaLktk29CmH16Rb3vDC7C1oaeJBJJ5NCkez63V32mmTJa4uBIYfcwGCQNBOHNS73tVnrN3Z6oNnr1pUn0wwzULoZTAJcQcjOW8IpaNjJSZieXT8MLxS1BklXa81CsjMzlwUpoSMZCJAKkSryQCQhKMoXIDme0p/WanX5BZm+3tw56wYWl2m/eanUegWP2noktaQSBJB4Z7z5Inoq9sXaonPNQXu4LXXdss6tT7UPAzII/iA1aSOeR6EKkvS6KlEnunLf81nF43ptOO2t6VdOZk7kgdmgK8Gq2aVTfwMEbwuheyu+6lG1UxiBY6Q4EwQCMzzzAy5blzVrlZXTJqMAmS4AdZAGaA+o7RtAzEA0SN5Ur9LN5+Sz1kYIZiALsLcRExMZx4q1wt4K2Y2lOBNNTrVKxBEEIRhAElCREEAq8vLyDICDklncgYzOUrhmDOiYFUbIPRN2WnkeZ+QTuIEJWgaJAsKv2iuanbLPUs9X3XjI72uGbXt5gwVYEjyVbYdo7HWcW07TRc5pILQ9uIRr3TmRzQHGW3R2c06o71F5BjSRkY8Qnn2ppylXN81A6tVqDR73HwJJErD3lia4kDeuH5S9PfpWFg6iXHunf8ADetpsBZ+0tTXdq0mkxzsApwTIwRJcSB3lzazX1gcA5srV3B7QKVjp1OyoB1Wo8TPda1jWmCTq4kk5CIiVtjpO+mGTJX1nU8u2EIMC5xcHtapVC5trp9lpgdTxVGnjiES3dpK0FH2iXa4x9IjOM6dQDqDh0XTqXE02BKGqLd972e0CaFanU+64Ejq3UKWgEXivLyQIhKJCUBzTaYfrNTqPRQLLYG13dm7Qg+BAyIU7aY/rNTr8lHul8PnMw12mum5Oek15mIJSuJ1ma9zXYoa1tNu+G6A7v8A1ZW8be6q0iq1hOclstcPvMOq1jLxcaod2gc0OmHCHtb9kjf1ULaCpZXnEGQ7PNcETzy9WazrhyS10cBjny08FHbotBf1JpMtCoI4rqrO4cF66kAVrcFXBXpugnC9roGpgyqpbHYS5mWh5D3OaQMQgHNsiQTu4eKpG9O1i1mGGIEBSf0iqo23LCRpkFH+lBVtjtr2p1qYY5PNKGpwIghBRAoAgiCEIggCXl5eQZV5eXggFaF6o8NBc4hoGpJAA6krP7ZbUNsFJriwvfUJFMaNloBJcdwEjLU/EcWvy/q9qeXVqhdwGjG8msGQHx6q602Uy023u3D7Q51CzuIs4yJEg1TvJ34J0G/U8BU7FWqiyo8ODWvqQGvOp3YcR0WYqV43E9ITNS0E+6IPmnekWr6qpea2267bbvdhPdJWGvYNa97nkNDYid5LZAA3rONt1caHDGhEyOmalOt9SoD2vfJAGIgYsjx48+S5a+Nqe3Tbytx0rK1aXEhs80IMnSN35+KmdnGZj87ggpMkzuGi6orrhyTO+Xi2EHaQiqOzhQ3PzTmdBY0LS5pDmktcNCCQQeRGhW62T22vJ1RtFrhXG/tRJDRqTUHe8TOa5wx66HsJVZRpkmMdTMng0e635+Kzy5PWu2mLH7206nZ9oGEDtGuYd8DE2eRGfwVhZ7dSf7r2nlMHyOaxtO3sdrCNzqZXJGe326reNX64bcoFjGXl2fuVHDlMjyOSeN+1o98f4t/BXHkV+2U+Lb6UW0h/WanX5BMXMCahABJLHZDU5aDmplrpsquL3nvHU6fBHdtJlF/bAl+EHuiJPTRX/NSY0z/GyVnetsvezmsf3yS4aB7MDxyJgEqntdsYVvb0qNtv7ahWDQcsTmiBvLWtMjzVDV2Vs4k03vE6YojppPxXPOtu3+89sBedUjMZT6fiqd7JXTLNsk7EX1CBEhrRnO6SeCmPuSgB+yZi5CJPGBv/ABXTjruNuHLOrOeXBs5UtLi1sNAEkndwy1XXtl7sp2emKTeGZ3k8VBuujhmBEALR3JZwe+VetMZnaHaaeZB45JvAre9bLPeG5UclMRpuGJ5qYYE81CjgRhA1GEgJKEIRIBUSGUoQZUqRV+0N4Gz2WtXAk06b3NG4uA7oPKYTDnftgvAmrTo5YWMx8y55gz0DR5lc4cRxTdttFeo91R7pc4yScySdSoVW0ka6/Bbb1GkpdW0MbkczwCBtcn3afmVFs7SdPPP4xqprKLvtu+CUTMgYed7QFJoUA4GXBsAnOczwEb1Ha5w/m6iD8ERtI3ghURsU5QV6kd1uu9K+0Tk3zQNaAlJmy2BJQU7uqOGMw1pMYnGBPQZp3IuE6SJVxZwH03MnXQRwzCxyTro47U9K7KpMMAqngySTyAIBJ5BbCw7J3k6k2qyzObOjHOYypHEse4EDkc+SobrqYXDcQu2bH7QttDAxx+taM/5gP4hz4rH2i06lvqaRurmTrNeFIw+y2jqKT3N/yaCPilZtA+nlUY9n3mub6rtNotrKY77gOW/yVRadomO7oBg7zEHw3KbY6b1tdc2TW9OZv2hpuGUSkpbRtiFqLybQc6expEgZzTbmd+5M2C4bHUBcaDN2kgZ6ZAwj8eD/ACp/TM17+4EILqvd9Wq1pyYJLnCJAAJ35TlELcWbZyyB7yLPTIaABLcWcZ681avu6jhaw02Q3OMIgHiAiMEQU+TLnF8bQuJii4tjPjO7NQ7PtJWLh2gDm6GGCY49V0u8bKxwbRwAh0EiGxhaQTI4aDxWYvfYyCXWV4bOtJ0lv9rtW+M+Cc4dRwPyJmf0aoXqXYRTa4tPdDpY0g/dJ15rQWeyDCJGExmCZPiVzZlqrWd5pVGljhAIPwI49Vsbkv8AHuv906HWOvJGO3rOpPJX+SN1XzLE3PLMoGVXUngQS1LSruqiWktZoDAxOjfmCAPDyUixPLXd8ue05SQ2Rw92MvBdGtuK0Hqt4sPdjUKnyWl7KkeCT6NR5IJNanGppicaks6CiCBpRBIDBRIAiCAJEEKUIMSCsxpa4PALSCHA5ggjMEcIRqDfto7OzV6n2KNV3+NNx+SYfNlqcJJGQMkDXInIKBW/O5TKoHEqJVaSDAJWlihKspAYOiM1OaS1WF9AhjoMsY8EaEPE/AyPBNNad0EcN6cTwDprO3FNuqnekhu8OCIUGcT4o5I12kJO1lPmmwCU2S4+6I9UuQSm6HDqJ81q7hstTESWPAAJktcAOUkLHPEAgZnivpG14XWXEwhwdTBaR/EC2QR1Wdz04le9kNKpiA7r8wd07wnLLbnNhzSQRoQYPmuhXfs+200HUazS2c2ujNrho4LPO9mttaYa+g4bjje2ercBjpJ6rC1N9N6ZIiOUajfTwMzJ5pi032Srez+za2OPfq0GDkXvPlhHqry7/ZfQEGvWqVTvDQKTT6u+IURhltPkx9MLTvsu7pJncZ1HDqtV7P7W5zKocZaHtw+IJI/PFaa0+z673mmexw9mcsLnDFyfvd115or4p0rOWU6TGsbg0aABqRJ4nmumsTrUuSZiZ4OWfJp4udPxTprCXE6CFWUrWDGeiCvXmR3u9wiCIhMkqxuLsVQ6u05MBJaJ45z4p0EDQZqKytHLgBuUS22/CMtSmDG1Vgo2ikWPgPGbH/xNd6lvELm9ntDqZLHZFpg+C1F4W5xnNZe82yce/f0WeSm4aY7+stJdN9OZofA5jyV7RvkP98COI3c43rnFntKn2a3EFYVtavTotWtu4dDfVLgQ3M7oVZ2Ffg//AC/6tNstVZUszKmHvQWnLe0xPop2A8B5LtrzG3l24nSWxOAplhTjVDc81OAplpTrSgDBRymwUSRilEEKUIAwol7x2FWcwabx5tIUlQ75P1FX7jvRK3Uqr8ocwrXbRGlKnP3G/gqLaMNDIiByG7otLbCsdtNW7pC4abmz08sRFJFtjb7HaH0voeIBlMscXiC4B0sEHPKXZ/zLPmlG6ObZTNkwxBE81LDo0zHn5L1K9PJkjS4cHDyKUBrt56f8RNcDoY5Qge2evHerInZDcU3WeNJ6onE7/P8AFNxySAQwHQ5LZ3D7Rq1ls7LP2LKgZIa5xIOGZDSBwnyWOdw4oaoyngotHBt+fazaB7tnpDxcur3baTVo06hyL2NcY0lwBy818xlfStw/u1D+lT/1CiClYhEEARBMQMFZXbegcVJ44OafAgj1K1Kp9qKc0geDx8QQgMeyn4eaeFPmfijaOSdDOSZotV+EZfn8VV2m2q3r0yqS0sz/ABQaur1cWSgizFx6buhCnVKfZvz0yKlmlDiRujxDg7/iNJmVNfezr6Te3pAupAw8DMsPEj7PPcqSlWzA1nIcSTpC7LcF3Nq0s3lpxbjB0V1ZrFY7PBNOmH/bwMDjzxASonFG+DrnmI5NbI2HsLHSpvEOw4njeHPJcQeYmPBWuNvBQbTf9kbq4Ku/+lsn2x8VXrpjNtrJhTrSo1Mp5rkNj4KcBTLXIwUgeCNNAosfFIHQUoVZaL4pNynEeSinaEfYPmma+UW9mzRqgamm70KhUb/pHIy1Tq1dppucCCMLjI4BpSno4nlzO8XQ2Vz+/K+OY3ekgfMLeXs2aOWsLFOsn6pannVnYNH99Uk/6BcmGOXf5NuFTZD3dJ9U+wj+EweBUek4AAb4k/8AqfEOz0/PFejXp5snTnuz4fggLvzvTbiRr/zz3IHOKewM9UJKAhNlyQOpRwTAenGnlHVIGagiQvpW5P3eh/SZ/qF822rSeR/PxX0jc37vR/pM/wBQs/sSsAUQTbSjCZDVffrZou5QfiFOlQ72d9S/og9skOieao88U5iyTM1aXc9FS2sqyrOUX6EH+8YCYQ3NZWpwffZw1LeijUHODA0zAdkSNQP/AEKx/QQDsTHuYRnIK9XqHsyAQ8Nc0udAGsgHJCbJ1htmBpGYz3HkrWtQZaWjvd4Disy2XCWlGy1upEOEyNeCpjpKtVzBsguUP9FUuKavS/jVIxAiOCq/pg5o3BxEuq0jknmlRaRyTzXLNuktcnA5RmlONcgHX1Q0FxMAarPWq8HVjDcm+qZ2pvOC2iDrm75BTdnrKCAkDDbEY0Ue0UyFsX2QQqe32LfCIDPhibq2l9NjwCYc0gjkcvmpxZGSg3o2GHw9Qpv1Kqc2j/VRbH9yFnazB9AtgkAmtZQJy31D8iry1u7qw172iX9mYw4hUP3gC0fBxXLg+Tu8r4mKcQkc07vw9EeR0KAh3DxB+S9F5xpzuP4f8KajmPQp9zzvE/Appxb/ADKZMBHMeaFFluBQxy80gVruH4o/XihAKIEDn+eKYH2ctI01zX0ddB+oo/0mf6hfNj6p8OC7b7ML47exNYfes5FE82gA0z5GP7Sp3GymGzBRgpkFECmk7KjXjRx03N3kZdRmE9Kj26phpuP8p8zkEpOHPLFfdGpIxAESHNdkQ4GCpP6RZoCCsrtFsuajg+z4cZA7RsxLshjaTxznmqQbN29p/ZP8HDPxBzUxeGk1l0Gpa6ernADyCjVr+sbBBefAFZy4butTH1G1mPDatCrSJcQYLgC05niPiqdmzFscARZ3Z/d/FP3gesr68draelE1H/eAaPA6/BM7OPrV3lxDhRghxHuj7OZ94gx4SqkbK20GewcP8fxXQrsqVG0adOrGMNDXCNcvsgQla/6EU32gW27K9LvAEjiFFZepGThK6RdZa+mOXdPh+QoV67NUav8ADB4haRO3PrXDFi00X6gSi7OjyXr22RrU5NPvD4qi/R1o+w9G/wDg4/bq1J+QTzXKDRfkE+xylsmNKMOUUPRY0Bzm9rxxWp5J0cQPDJbDZy9QAM1zK9HltoqA7nn1VhYLzLd6Qdts1va5M3nXaAubWPaBw3orw2iLhEqoiA0otDSVV33WBa6OHoVm23seKcFtxNMlK8f1mCpxaJJa/dWAvAzVd4LoNozpnoudWo/Wv6rjwdvQ8rqHpGiMvdOR+aZKGCMwV1b04Uk1iJ00Q9oTGXxTAqTrqnuCftI0RxPL4prNOOOfghS3ICBxRFy8U3VduQCFy3vsdt+G1VaO6rSxf3U3CPg93ksCtN7NKkXlQ5iqD07GofkiCnp3gORgqO0pwFWg8CoF9v8AqiOJAHr8lKLlWX4/6sfeHoVNupVT5Qylps0nEww8bpgO/AqEba+ZLo8NNxyCl3ja2gEAS7SFTCzPnM4TAMTOR0XM615StLnNgPaemvkIVpQtxgBwGQjwWfoXaYxd1/iR5KdTEDMAeJ/BI1o+1NOX/MlDq1g33GAE5DiSmsUEEugDKBwPNGXEmR3WjU/xGdw4DiqTK32dqFuMGNx9ZV4HgrNXVW+s6yPz5K67QLop048nyPVWyo/YjgidWPVN/SeS0ZquhoFKYUq8obnEsry8mHJttGgW2pHI+YCgWdxXl5QafTcUNocV5eVEjh54qZSecOq8vJSF879n4fJc2vD9s/r8gvLy5MPbv8r4wEJV5eXS4TL0THkry8kCA5hOFeXkwR5yTLdUi8gCKu9hXEXhZiPtu+NJ4PqlXkB2ypaHA5H0Vbb70rNGT48G/gvLy2ZqG0bQ2qP2p/xZ+Ch3Te9etVLalRzgGkgGImQJgLy8sr/FVPlC5ZRaXAkAlUlpce3d+dDkvLy54da2u45xuUq1MA0Xl5Bq6sdUjazsJMmQF5eQUrSxmHNj85K5a4pV5dOPpx5ewueUkpV5asX/2Q==",
      description:
        "Specialized physiotherapy for women's health, including pre-natal and post-partum care.",
    },
    {
      id: "neurological-rehabilitation",
      title: "Neurological Rehabilitation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdVb7Ep8arvL4u2cV2j2ngcq05-G5aGKluFA&s",
      description:
        "Specialized therapy for neurological conditions to improve function and independence.",
    },
    {
      id: "occupational-therapy",
      title: "Occupational Therapy and Ergonomics",
      image:'https://www.shutterstock.com/image-photo/young-female-african-american-athlete-260nw-1726404145.jpg',
      // image: "data:image/jpeg;base64,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",
      description:
        "Workplace ergonomics and occupational health solutions to prevent work-related injuries.",
    },
    {
      id: "pediatrics",
      title: "Pediatrics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGx0nRyk_bU7nY3VeeeGrX7HyWmQxkvShOCA&s",
      description:
        "Specialized physiotherapy services for children and adolescents.",
    },
    {
      id: "geriatric-care",
      title: "Geriatric Care",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFE2_zgn9Oja5F5R6y6uB8nbKEN1fLq7wGYw&s",
      description:
        "Specialized physiotherapy services for older adults to maintain independence and quality of life.",
    },
    {
      id: "cardiovascular-rehabilitation",
      title: "Cardiovascular Rehabilitation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-qtkjMxogniB_ZhVyazq7I1BwvE8UkGE3g&s",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
    {
      id: "relaxation-massage",
      title: "Relaxation Massage",
      image: "download_one.jpeg",
      description:
        "Specialized rehabilitation for heart conditions and cardiovascular health improvement.",
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Restoring Mobility,{" "}
                <span className="text-blue-600">Empowering Wellness</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                At Adidian Physiotherapy Clinic, we deliver personalized,
                evidence-based physiotherapy services in a compassionate
                environment, empowering you to achieve optimal health and live
                life free from pain.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Calendar size={20} />
                  <span className="font-semibold">Book Appointment</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:07065873379"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <Phone size={20} />
                  <span className="font-semibold">Call Now</span>
                </a>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Licensed Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Evidence-Based Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Personalized Treatment</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="image_nine.jpg"
                  // src="https://images.pexels.com/photos/7659731/pexels-photo-7659731.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Black physiotherapist working with patient"
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">
                  Patient Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Adidian?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand for ADIDIAN values that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Goal</h3>
              <p className="text-gray-600 text-sm">
                Deliver personalized, evidence-based physiotherapy services in a
                compassionate environment.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm">
                Help people get back to living life free from pain and
                discomfort, full of energy and vitality.
              </p>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 text-sm">
                Revolutionize physiotherapy by providing pioneering,
                evidence-based treatments that transform lives.
              </p>
            </div>

            <div className="text-center p-8 bg-orange-50 rounded-xl">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Our Community
              </h3>
              <p className="text-gray-600 text-sm">
                Serving everyone from infants to elderly, workers, athletes, and
                families seeking healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive physiotherapy services tailored to your unique needs
            </p>
          </div>

     

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={`/blog/${service.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 font-semibold inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards a pain-free, active lifestyle. Our
            expert team is here to help you achieve your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Calendar size={20} />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:07065873379"
              className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Call: 070-6587-3379</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
