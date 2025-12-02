
let items = [
    { id: 1, name: "gautham" },
    { id: 2, name: "nikhil" }
];


exports.getItems = (req, res) => {
    res.json(items);
};

exports.createItem = (req, res) => {
    const { id , name } = req.body;
    const newItem = { id:Number(id), name };
    items.push(newItem);
    res.status(201).json(newItem);
};


exports.updateItem = (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send("ID not found");

    item.name = req.body.name;

    res.json(item);
};

exports.deleteItem = (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send("Item not found");

    items.splice(index, 1);// syntax of splice is , startindex , delete count  . so we get the index of the particular id , (starts from o as array) slice doesn change the original arrya m just retrieves , but spice changes and modifies the original array .
    res.json({ message: "Deleted" });
};
