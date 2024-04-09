<?php        
    $strobelightgauchestatus = $_COOKIE['LeftStrobeLight'];
    $strobelightdroitestatus = $_COOKIE['RightStrobeLight'];
    $aftstrobelightstatus = $_COOKIE['AFTStrobeLight'];
    $taxilightstatus = $_COOKIE['TaxiLight'];
    $doubleflashlightstatus = $_COOKIE['DoubleFlashLight'];
    $rotationvolant = $_COOKIE['RotationVolant'];
    $taxienable = $_COOKIE['TaxiEnable'];
    $rudderposition = $_COOKIE['RudderPosition'];
    $positionvolant = $_COOKIE['PositionVolant'];
    $data = array(
        'light' => array(
            'ledwingleft' => boolval($strobelightgauchestatus),
            'ledwingright' => boolval($strobelightdroitestatus),
            'ledtaxi' => boolval($taxilightstatus),
            'ledaftstrobe' => boolval($aftstrobelightstatus),
            'leddoubleflash' => boolval($doubleflashlightstatus)
        ),
        'wings' => array(
            'aileronright' => intval(-$rotationvolant),
            'aileronleft' => intval($rotationvolant),
        ),
        'taxi' => array(
            'direction' => intval($rudderposition),
            'enable' => boolval($taxienable)
        ),
        'flaps' => intval($positionvolant),
        'rudder' => intval($rudderposition),
        'elevator' => intval($positionvolant),
    );
    file_put_contents('../trame.json', json_encode($data));
?>