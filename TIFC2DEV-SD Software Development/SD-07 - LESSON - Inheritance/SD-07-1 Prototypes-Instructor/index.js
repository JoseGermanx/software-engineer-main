function Movie(name, watched, times) {
    this.name = String(name)
    this.watched = Boolean(watched)
    this.times = Number(times)
    this.info = function () {
      if(this.watched === true) {
        console.log("I have watched " + this.name + " " + this.times + " times." )
      } else {
        console.log("I have not watched " + this.name + " yet.")
      }
    }
  }
  
  const watchList = []