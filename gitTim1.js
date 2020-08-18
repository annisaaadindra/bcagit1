//MENCARI RUTE TERDEKAT DENGAN MEMANFAATKAN GRAPH & ALGORITMA GREEDY

//variabel graph('node asal': ('node tujuan': weight))
var rute = {'A': {'C': 4, 'G': 9},
'G': {'E': 6},
'C': {'D': 6, 'H': 12},
'D': {'E': 7},
'H': {'F': 15},
'E': {'F': 8},
'F': {'B': 5}};

//fungsi shortest path using greedy algorithm
function greedy_shortest(graph, source, dest)//parameter tdd pilihan rute, lokasi berangkat dan lokasi tujuan
{
    result = [];
    result.push(source);
    var current_node ;   
    
    while (dest !== result[result.length-1]) 
    {
        current_node = result[result.length-1];
        var check_key = dest in graph[current_node];//mencegat pencarian local max jika titik selanjutnya adalah dest
        if(check_key)
        {
            result.push(dest);
            break;
        }

        var [localmax] = Object.entries(graph[current_node]).sort(([ ,v1], [ ,v2]) => v1 - v2);
        var node_max = localmax[0];
        result.push(node_max);
    }

    console.log(result);
}

greedy_shortest(rute, 'A', 'H');

//ADD BY YUNDA
var nilai = [5,7,1,6,8,10,22,13,7,8];
var max_ = Math.max.apply(Math, nilai);
var min_ = Math.min.apply(Math, nilai);

nilai.sort();
console.log(nilai);
console.log("Nilai Terbesar");
console.log(max_);
console.log(min_);