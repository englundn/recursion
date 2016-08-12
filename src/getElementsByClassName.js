var getElementsByClassName = function(className, startNode) {
  node = startNode || document.body;
  var found_elements = [];

	var isInList = function(item, list) {
    temp_list = Array.from(list);
    inList = false;
  	while(temp_list.length > 0) {
    	if (item == temp_list.pop()) {
        inList = true;
        break;
      }
    }
    return inList;
  }
  if (node.classList) {
    if (isInList(className, node.classList)) {
	    found_elements.push(node);
    };
	};
	var childNodes = node.childNodes;
	if(childNodes) {
		for (var i=0; i<childNodes.length; i++){
			var child = childNodes[i];
			found_elements = found_elements.concat(getElementsByClassName(className, child));
		};
	};
	return found_elements;
};
