<?php        
    $strobelightstatus = $_COOKIE['StrobeLight'];
    $navelightstatus = $_COOKIE['NaveLight'];
    $aftstrobelightstatus = $_COOKIE['AFTStrobeLight'];
    $taxilightstatus = $_COOKIE['TaxiLight'];
    $doubleflashlightstatus = $_COOKIE['DoubleFlashLight'];
    $rotationvolant = $_COOKIE['RotationVolant'];
    $taxienable = $_COOKIE['TaxiEnable'];
    $rudderposition = $_COOKIE['RudderPosition'];
    $rotationvolantdroit = $_COOKIE['RotationVolantDroit'];
    $rotationvolantgauche = $_COOKIE['RotationVolantGauche'];
    $positionflaps = $_COOKIE['PositionFlaps'];
    $positionvolant = $_COOKIE['PositionVolant'];
    $data = array(
        'light' => array(
            'strobelight' => boolval($strobelightstatus),
            'navelight' => boolval($navelightstatus),
            'ledtaxi' => boolval($taxilightstatus),
            'ledaftstrobe' => boolval($aftstrobelightstatus),
            'leddoubleflash' => boolval($doubleflashlightstatus)
        ),
        'wings' => array(
            'aileronright' => intval($rotationvolantdroit),
            'aileronleft' => intval($rotationvolantgauche),
        ),
        'taxi' => array(
            'direction' => intval($rudderposition),
            'enable' => boolval($taxienable)
        ),
        'flaps' => intval($positionflaps),
        'rudder' => intval($rudderposition),
        'elevator' => intval($positionvolant),
    );
    file_put_contents('../trame.json', json_encode($data));
?>