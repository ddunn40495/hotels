 
<?php
header('Content-Type: application/json');
include_once __DIR__ . '/../models/listing.php';
if($_REQUEST['action'] === 'index'){
    echo json_encode( Listings::all() );
} else if ($_REQUEST['action'] === 'create'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);

    $new_listing = new Listing(null, $body_object->address, $body_object->city, $body_object->state, $body_object->zip, $body_object->rent,
    $body_object->pic,
    $body_object->available,
    $body_object->category);
    $all_listings = Listings::create($new_listing);
    echo json_encode($all_listings);
} else if ($_REQUEST['action'] === 'update'){
    $request_body = file_get_contents('php://input');
    $body_object = json_decode($request_body);
    $updated_listing = new Listing($_REQUEST['id'], $body_object->address,
    $body_object->city,
    $body_object->state,
    $body_object->zip,
    $body_object->rent,
    $body_object->pic,
    $body_object->available, $body_object->category);
    $all_listings = Listings::update($updated_listing);
    echo json_encode($all_listings);
} else if ($_REQUEST['action'] === 'delete'){
    $all_listings = Listings::delete($_REQUEST['id']);
    echo json_encode($all_listings);
}
?>