class Graph {
	constructor() {
		this.nodes = [];
		this.edges = {};
	}

	addNode(node) {
		if (!node in this.edges) {
			this.edges[node] = {};
			this.nodes.push(node);
		}
	}

	addEdges(node1, node2, weight = 1) {
		// if node1 has been added
		if (!this.nodes.includes(node1)) {
			this.addNode(node1);
		} 
		if (!this.nodes.includes(node2)) {
			this.addNode(node2);
		}
		this.edges[node1] = {node2: weight};
		this.edges[node2] = {node1: weight};
	}

	addDirectedEdges(node1, node2, weight = 1) {
		if (!this.nodes.includes(node1)) {
			this.addNode(node1);
		} 
		this.edges[node1] = {node2: weight};
	}

	display() {
		console.log(this.edges);
	}	

	BFS(node) {
		// result array keep track of all nodes
		let result = [];
		// visited set keeps track of visited nodes
		let visited = new Set(node);
		// queue with input node
		let queue = [node];
		// while visited set is same length as this.nodes 
		while(visited.length < this.nodes.length) {
			let cur = queue.shift();
			visited.add(cur)
			for (key in cur) {
				if (!visited.has(cur[key])){
					queue.push(cur[key]);
				}
			}
		}
		return result;
	}

	DFS(node) {

	}

}





