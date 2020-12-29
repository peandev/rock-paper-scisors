export function randomSelect(){
    var options = ["rock", "paper", "scisors"];
    var cpuSelected = options[Math.floor(Math.random()*options.length)];
    return cpuSelected;
}
