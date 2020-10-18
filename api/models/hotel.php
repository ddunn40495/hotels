class Listing {
    public $id;
    public $address;
    public $category;
    public $rent;
    public $available;
    public $pic;

    public function __construct($id, $address, $category, $rent, $available, $pic) {
        $this->id = $id;
        $this->address = $address;
        $this->category = $category;
        $this->rent = $rent;
        $this->available = $available;
        $this->pic = $pic;


    }
}
